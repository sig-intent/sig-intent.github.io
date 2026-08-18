# Working on this site locally

The site is Jekyll on GitHub Pages. GitHub builds it natively on every push to
the default branch — there is no CI of ours and no build artifact to commit.
Everything below is only so you can see your changes before they are public.

## What you need

Docker Desktop. That is all — you do **not** need Ruby installed on Windows.

If you would rather use a native Ruby, install Ruby 3.3 (not 3.4 — see the
Gemfile) and run the same `bundle` commands without the `docker run` wrapper.

## Live preview

From the repo root:

```bash
docker run --rm -v "$PWD:/app" -w /app -p 4000:4000 ruby:3.3 sh -c \
  "bundle config set --local path vendor/bundle && bundle install && \
   bundle exec jekyll serve --host 0.0.0.0 --livereload"
```

Then open <http://localhost:4000>. Edits to markdown, layouts and CSS rebuild
automatically and the browser reloads itself.

The first run takes several minutes because it compiles native gems. After that
the gems live in `vendor/bundle` (git-ignored) and startup is a few seconds.

> **`_config.yml` is the exception**: Jekyll reads it once at boot. Change it and
> you have to stop and restart the container.

## One-off build

To produce `_site/` without serving — useful for grepping the generated HTML:

```bash
docker run --rm -v "$PWD:/app" -w /app ruby:3.3 sh -c \
  "bundle config set --local path vendor/bundle && bundle install && \
   bundle exec jekyll build"
```

## Two traps worth remembering

1. **Do not use the `jekyll/jekyll:4` image.** It ships Jekyll 4.x, while the
   `github-pages` gem pins Jekyll 3.10 to match what GitHub actually runs. The
   two cannot be reconciled and you get an unresolvable gem conflict. Use a
   plain `ruby:3.3` image and let the Gemfile decide the Jekyll version.
2. **`bundle install` and `bundle exec` must be in the same `docker run`.** With
   `--rm`, a container that only installs throws the bundle away when it exits,
   and the next container fails with `Bundler::GemNotFound`. Chain them with
   `&&` as above.

## Adding an essay

Create `_writing/<slug>.md`. The slug becomes the URL: `/writing/<slug>/`.
Choose it carefully — it is the canonical URL and changing it later costs you
the accumulated links.

```yaml
---
title: "The full title, as it should appear in a search result"
standfirst: >-
  One or two sentences under the headline. Shown on the essay page and in the
  archive listing. This is editorial copy, not metadata.
description: >-
  The meta description — under ~155 characters, written for someone deciding
  whether to click. Falls back to standfirst if omitted, but write it.
date: 2026-08-17
reading_time: "9 min read"
tags: [architecture, ai, strategy]
pull_quote: >-
  The sentence you would want quoted back at you. Rendered under the essay.
seo:
  type: BlogPosting
---
```

Then the body, starting at `##`.

**Do not put an `# H1` in the markdown.** The layout renders `title` as the page
`<h1>`; a second one splits the document outline and confuses both screen
readers and search engines.

Nothing else needs touching. The homepage list, the `/writing/` archive,
`sitemap.xml`, `/feed.xml` and `llms.txt` are all generated from the collection.
That is deliberate: a hand-maintained list is what once let the homepage
advertise an essay that did not exist.

## What is generated, and therefore must not be hand-edited

| Path | Produced by |
|---|---|
| `sitemap.xml` | `jekyll-sitemap` |
| `/feed.xml` | `jekyll-feed`, from the `writing` collection |
| `/feed/posts.xml` | `jekyll-feed`. Empty and unadvertised — there are no posts. It exists only because the plugin insists. |
| `<title>`, OG tags, canonical, JSON-LD | `jekyll-seo-tag`, via the single `{% seo %}` call in each layout |

`robots.txt` and `llms.txt` *are* hand-written, but they carry front matter so
Jekyll runs Liquid over them — the essay list inside `llms.txt` is generated.

## Checking the SEO output before you push

```bash
# canonical, description, OG tags
grep -oE '<title>[^<]*</title>|<link rel="canonical"[^>]*>' _site/writing/<slug>/index.html
# JSON-LD is valid and has the right type
python -c "import re,json,io; h=io.open('_site/writing/<slug>/index.html',encoding='utf-8').read(); \
print(json.loads(re.search(r'application/ld\+json\">(.*?)</script>',h,re.S).group(1))['@type'])"
```

## Deployment

Merging to the default branch is the deploy. GitHub runs Jekyll itself, so the
only plugins available are the ones on
[GitHub's allowlist](https://pages.github.com/versions/) — currently
`jekyll-seo-tag`, `jekyll-sitemap` and `jekyll-feed`, all three declared in
`_config.yml`. Adding any other plugin will build locally and then silently do
nothing in production. That constraint is the price of having no CI to maintain.
