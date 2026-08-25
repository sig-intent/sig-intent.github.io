#!/usr/bin/env python3
"""Generate the SIGINTENT favicon set from the tracked monogram.

Provisional mark: the first two letters of the wordmark, tracked, light on ink.

Why raster and not an SVG with a <text> element: the site loads Inter from
Google Fonts, so an SVG favicon containing text would be rendered with whatever
the browser decides to substitute, differently on every platform, and favicon
rendering is one of the least consistent corners of a browser. A PNG says exactly
what it says everywhere. When the mark is final it is worth outlining the letters
into paths and shipping an SVG as well.

Why light on ink rather than a transparent ground: a favicon sits in tab chrome
whose colour follows the OS, not the page. An ink tile with light letters holds on
both; ink letters on transparency disappear in a dark tab strip.

Font: Segoe UI Semibold, which is the weight the site sets on .brand__mark and
the first real face in its own Inter fallback stack. Nobody can tell the
difference between Inter and Segoe UI at 16 pixels, and this avoids vendoring a
font file to draw two letters.

Usage: python tools/make-favicon.py
Writes into assets/img/. Requires Pillow.
"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

# Straight from assets/css/styles.css. Ink is the light theme's --ink, paper is
# its --bg, so the tile is the site's own two colours and nothing new.
INK = (26, 26, 26, 255)
PAPER = (237, 237, 235, 255)

LETTERS = "SI"

# Two weights, because the smallest tile needs the heavier one. Each entry is
# tried in order and the first that exists wins.
FONTS = {
    "semibold": [
        "C:/Windows/Fonts/seguisb.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    ],
    "bold": [
        "C:/Windows/Fonts/segoeuib.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    ],
}

OUT = Path(__file__).resolve().parent.parent / "assets" / "img"

# Supersample, then downscale. Drawing "SI" directly into 16 pixels gives mushy
# stems; rendering it eight times larger and reducing with a good filter does not.
SUPERSAMPLE = 8

# How much of the tile the letters occupy, and how far apart they sit, per size.
# Small sizes need proportionally larger, tighter letters: at 16 pixels the
# padding and the tracking that make the mark feel considered at 180 are just
# lost pixels.
#   size: (fill fraction of tile width, tracking as a fraction of letter height,
#          weight)
#
# 16 gets bold: at that size the S is about nine pixels across and semibold stems
# resolve as soft grey. Everything above it gets semibold, which is the weight the
# site sets on .brand__mark, so the tile and the wordmark are the same drawing
# wherever there is room for them to be.
PROFILES = {
    16: (0.80, 0.11, "bold"),
    32: (0.76, 0.16, "semibold"),
    48: (0.74, 0.18, "semibold"),
    180: (0.68, 0.22, "semibold"),
    512: (0.66, 0.22, "semibold"),
}


def load_font(pixels: int, weight: str) -> ImageFont.FreeTypeFont:
    candidates = FONTS[weight]
    for path in candidates:
        if Path(path).exists():
            return ImageFont.truetype(path, pixels)
    raise SystemExit(
        f"No {weight} sans font found. Tried:\n  " + "\n  ".join(candidates)
    )


def draw_letters(height_px: int, tracking: float, weight: str) -> Image.Image:
    """The letters alone, cropped to their ink, on a transparent ground."""
    font = load_font(height_px, weight)
    gap = round(height_px * tracking)

    # Each glyph separately, so tracking is a decision rather than whatever the
    # font's kerning table wants between an S and an I.
    glyphs = []
    for char in LETTERS:
        left, top, right, bottom = font.getbbox(char)
        cell = Image.new("RGBA", (right - left + 2, bottom - top + 2), (0, 0, 0, 0))
        ImageDraw.Draw(cell).text((-left + 1, -top + 1), char, font=font, fill=PAPER)
        glyphs.append(cell.crop(cell.getbbox()))

    total_width = sum(g.width for g in glyphs) + gap * (len(glyphs) - 1)
    tallest = max(g.height for g in glyphs)
    strip = Image.new("RGBA", (total_width, tallest), (0, 0, 0, 0))

    x = 0
    for glyph in glyphs:
        # Bottom-aligned: these are two capitals, so their baselines agree and
        # centring vertically would fight the cap height.
        strip.paste(glyph, (x, tallest - glyph.height), glyph)
        x += glyph.width + gap

    return strip


def make_icon(size: int) -> Image.Image:
    fill, tracking, weight = PROFILES[size]
    tile = Image.new("RGBA", (size * SUPERSAMPLE, size * SUPERSAMPLE), INK)

    letters = draw_letters(size * SUPERSAMPLE // 2, tracking, weight)

    target_width = round(tile.width * fill)
    scale = target_width / letters.width
    letters = letters.resize(
        (target_width, max(1, round(letters.height * scale))), Image.LANCZOS
    )

    tile.paste(
        letters,
        ((tile.width - letters.width) // 2, (tile.height - letters.height) // 2),
        letters,
    )

    return tile.resize((size, size), Image.LANCZOS)


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    icons = {size: make_icon(size) for size in PROFILES}

    # icon-512 is not referenced by any page. It exists because a square avatar
    # is needed wherever the wordmark is unreadable and only the mark survives:
    # LinkedIn, GitHub, Gumroad. Generated here so it cannot drift from the
    # favicon it is supposed to match.
    for size, name in ((32, "favicon-32.png"), (16, "favicon-16.png"),
                       (180, "apple-touch-icon.png"), (512, "icon-512.png")):
        icons[size].save(OUT / name)
        print(f"  {name}  {size}x{size}")

    # One .ico carrying three sizes, for the browsers and pinned-tab paths that
    # still ask for /favicon.ico by name whatever the markup says.
    icons[48].save(
        OUT.parent.parent / "favicon.ico",
        sizes=[(16, 16), (32, 32), (48, 48)],
    )
    print("  favicon.ico  16+32+48")


if __name__ == "__main__":
    main()
