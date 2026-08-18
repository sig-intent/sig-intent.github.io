"""Check the built site against the SEO and GEO checklists.

Run after a build, from the repo root:

    python tools/seo-check.py

Exits non-zero if anything of severity `high` is found, so it can gate a push.

The ~/.claude/skills/seo-geo-audit checklists are the source of truth, and that
skill reasons about *quality* — is this description any good? — which a script
cannot. This only catches the mechanical regressions.

Two deliberate exemptions, both on /404.html: it must be noindex, and its title
is short on purpose. Flagging either would train you to ignore the output.
"""

import io, os, re, json, glob

pages = sorted(glob.glob('_site/**/*.html', recursive=True))
F = []
def add(sev, cid, msg): F.append((sev, cid, msg))

titles = {}
for p in pages:
    h = io.open(p, encoding='utf-8', errors='replace').read()
    rel = p.replace(os.sep, '/').replace('_site', '')

    def one(pat, flags=0):
        m = re.search(pat, h, flags)
        return m.group(1).strip() if m else None

    t = one(r'<title>(.*?)</title>', re.S)
    d = one(r'<meta name="description" content="(.*?)"\s*/?>', re.S)
    canon = one(r'<link rel="canonical" href="(.*?)"')

    if not t: add('high', 'SEO-001', f'{rel}: sin <title>')
    else:
        titles.setdefault(t, []).append(rel)
        if not (30 <= len(t) <= 60) and '404' not in rel:
            add('medium', 'SEO-003', f'{rel}: title {len(t)} chars (30-60) — "{t[:70]}"')
    if not d: add('high', 'SEO-004', f'{rel}: sin meta description')
    elif not (50 <= len(d) <= 160):
        add('medium', 'SEO-005', f'{rel}: description {len(d)} chars (50-160)')
    if not canon: add('high', 'SEO-007', f'{rel}: sin canonical')
    elif not canon.startswith('https://'): add('high', 'SEO-025', f'{rel}: canonical no HTTPS')

    if 'width=device-width' not in h: add('high', 'SEO-008', f'{rel}: viewport no mobile-friendly')
    if not re.search(r'<html[^>]+lang=', h): add('medium', 'SEO-009', f'{rel}: <html> sin lang')
    if re.search(r'name="robots"[^>]*noindex', h) and '404' not in rel:
        add('high', 'SEO-024', f'{rel}: noindex!')

    n_h1 = len(re.findall(r'<h1[\s>]', h))
    if n_h1 != 1: add('high', 'SEO-010', f'{rel}: {n_h1} elementos <h1> (debe ser 1)')

    # heading hierarchy (skips)
    lv = [int(x) for x in re.findall(r'<h([1-6])[\s>]', h)]
    for a, b in zip(lv, lv[1:]):
        if b > a + 1:
            add('medium', 'SEO-011', f'{rel}: salto de h{a} a h{b}'); break

    for lm in ('<main', '<nav', '<header', '<footer'):
        if lm not in h: add('medium', 'SEO-013', f'{rel}: falta landmark {lm}>')

    for img in re.findall(r'<img\b[^>]*>', h):
        if 'alt=' not in img: add('high', 'SEO-015', f'{rel}: <img> sin alt: {img[:60]}')

    for og in ('og:title', 'og:description', 'og:url', 'og:type', 'og:image'):
        if f'property="{og}"' not in h: add('medium', 'SEO-019', f'{rel}: falta {og}')
    if 'name="twitter:card"' not in h: add('low', 'SEO-020', f'{rel}: falta twitter:card')

    # anchors
    for a in re.findall(r'<a\b[^>]*>(.*?)</a>', h, re.S):
        txt = re.sub(r'<[^>]+>', '', a).strip().lower()
        if txt in ('click here', 'read more', 'here', 'link', 'more'):
            add('medium', 'SEO-014', f'{rel}: anchor poco descriptivo "{txt}"')

    # JSON-LD
    blocks = re.findall(r'<script type="application/ld\+json">(.*?)</script>', h, re.S)
    if not blocks: add('high', 'GEO-005', f'{rel}: sin JSON-LD')
    for b in blocks:
        try: data = json.loads(b)
        except Exception as e:
            add('high', 'GEO-013', f'{rel}: JSON-LD invalido: {e}'); continue
        ctx = data.get('@context', '')
        if ctx != 'https://schema.org': add('high', 'GEO-012', f'{rel}: @context = {ctx!r}')
        if '/writing/' in rel and rel.count('/') > 2:
            if data.get('@type') != 'BlogPosting':
                add('high', 'GEO-006', f'{rel}: @type = {data.get("@type")!r}, esperado BlogPosting')
            for k in ('headline', 'author', 'datePublished'):
                if not data.get(k): add('high', 'GEO-006', f'{rel}: JSON-LD sin {k}')
            if not data.get('dateModified'): add('medium', 'GEO-024', f'{rel}: sin dateModified')

    if '/writing/' in rel and rel.count('/') > 2:
        if not re.search(r'<time datetime="[^"]+"', h):
            add('high', 'GEO-023', f'{rel}: fecha no machine-readable (<time datetime>)')
        if not re.search(r'Antonio Elena', h):
            add('high', 'GEO-022', f'{rel}: autor no visible')
        for tbl in re.findall(r'<table\b.*?</table>', h, re.S):
            if '<th' not in tbl: add('medium', 'GEO-018', f'{rel}: tabla sin <th>')
        for pre in re.findall(r'<div class="language-([a-z]*)', h):
            pass
        plain = len(re.findall(r'<pre><code>', h))
        if plain: add('medium', 'GEO-020', f'{rel}: {plain} bloque(s) de codigo sin lenguaje')

for t, ps in titles.items():
    if len(ps) > 1: add('high', 'SEO-002', f'title duplicado en {ps}: "{t[:50]}"')

for f, cid, sev in (('_site/llms.txt', 'GEO-001', 'high'), ('_site/llms-full.txt', 'GEO-002', 'medium'),
                    ('_site/robots.txt', 'SEO-022', 'medium'), ('_site/sitemap.xml', 'SEO-023', 'medium')):
    if not os.path.exists(f): add(sev, cid, f'falta {f.replace("_site/","/")}')

order = {'high': 0, 'medium': 1, 'low': 2, 'info': 3}
F.sort(key=lambda x: (order[x[0]], x[1]))
print(f'{len(pages)} paginas auditadas\n')
if not F: print('sin hallazgos')
for sev, cid, msg in F:
    print(f'[{sev.upper():6}] {cid}  {msg}')

highs = sum(1 for sev, _, _ in F if sev == 'high')
if highs:
    print()
    print(f'{highs} hallazgo(s) de severidad high')
raise SystemExit(1 if highs else 0)
