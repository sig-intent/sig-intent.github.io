"""Generate the default Open Graph card at assets/img/og-default.png.

A placeholder with intent: 1200x630, the brand palette from assets/css/styles.css,
no stock imagery. Replace it with a designed card whenever you have one — nothing
depends on this script at build time. Re-run with:

    python tools/make-og-image.py
"""
import os
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
BG, INK, INK_2, INK_3, LINE = "#0f0f0e", "#ededeb", "#b8b7b2", "#84847f", "#2a2a28"

FONT_DIR = os.path.join(os.environ.get("WINDIR", r"C:\Windows"), "Fonts")
def font(names, size):
    for n in names:
        p = os.path.join(FONT_DIR, n)
        if os.path.exists(p):
            return ImageFont.truetype(p, size)
    return ImageFont.load_default()

serif = lambda s: font(["georgia.ttf", "constan.ttf", "times.ttf"], s)
sans  = lambda s: font(["segoeui.ttf", "ArialNova.ttf", "arial.ttf"], s)

img = Image.new("RGB", (W, H), BG)
d = ImageDraw.Draw(img)

# Hairline frame, inset — the site's visual language is rules, not boxes.
d.rectangle([48, 48, W - 49, H - 49], outline=LINE, width=1)

M = 104
d.text((M, 128), "S I G I N T E N T", font=sans(26), fill=INK_3)

headline = ["Technology strategy,", "architecture and AI."]
y = 210
for line in headline:
    d.text((M, y), line, font=serif(72), fill=INK)
    y += 88

d.line([M, y + 34, M + 96, y + 34], fill=INK_3, width=2)
d.text((M, y + 66), "Antonio Elena  ·  Independent advisory", font=sans(30), fill=INK_2)
d.text((M, H - 132), "sig-intent.com", font=sans(26), fill=INK_3)

out = os.path.join("assets", "img", "og-default.png")
img.save(out, "PNG", optimize=True)
print(f"{out}  {W}x{H}  {os.path.getsize(out) / 1024:.0f} KB")
