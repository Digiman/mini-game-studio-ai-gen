# 🏔️ Procedural Landscape Generator

A single-file HTML/JS app that generates unique pixel-art landscapes using layered value noise, with a seed-based system for saving and sharing your favorites.

## Features

- **Seeded PRNG** — Mulberry32 algorithm ensures the same seed always produces the same landscape
- **Fractal Brownian Motion** — 1–8 octaves of layered 2D value noise for natural-looking terrain
- **Pixel-Art Rendering** — Adjustable pixel size (1×1 to 8×8) for retro aesthetics
- **7-Biome Color Palette**
  - 🌊 Deep Water → Shallow Water → Sand → Grass → Forest → Mountain → Snow
- **Customizable Colors** — Click any biome swatch to pick a custom color
- **URL Sharing** — All settings encoded in the URL hash (`#seed=12345&octaves=6&pixel=4`)
- **PNG Export** — One-click download of the current landscape
- **Responsive Layout** — Works on desktop and mobile

## How to Use

| Control | Action |
|---|---|
| **Seed input** | Enter a number and press Enter or click Generate |
| **🎲 Random** | Generate a random seed |
| **🌱 Generate** | Re-generate with current settings |
| **Octaves slider** | More octaves = more detail (1–8) |
| **Pixel Size slider** | Bigger pixels = chunkier look (1–8) |
| **Palette swatches** | Click to change biome colors |
| **🔗 Copy Link** | Copies a shareable URL to clipboard |
| **⬇ PNG** | Downloads the landscape as a PNG image |

## Sharing

The URL encodes the full state:
```
index.html#seed=724183&octaves=6&pixel=4
```

Send the link to anyone — they'll see the exact same landscape. No server required.

## Tech Stack

- **Language**: Vanilla JavaScript (ES6)
- **Rendering**: Canvas 2D API
- **Dependencies**: None — single self-contained HTML file
- **Noise Algorithm**: 2D value noise with bilinear interpolation + smoothstep

## File

```
games/landscape-generator.html
```

## Possible Enhancements

- Animated transitions between seeds
- Side-view terrain elevation preview
- Color palette presets (fantasy, mars, toxic wasteland)
- Larger canvas sizes with web workers