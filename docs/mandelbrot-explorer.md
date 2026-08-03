# 🌀 Mandelbrot Zoom Explorer

A single-file HTML/JS interactive fractal viewer for the Mandelbrot set. Pan, zoom, and explore the infinite boundary with psychedelic color palettes and smooth iteration rendering.

## Features

- **Infinite Zoom** — Zoom in 2× on click, or scroll to any depth (limited only by floating-point precision)
- **Pan** — Click and drag to explore freely
- **Click-to-Zoom** — Click anywhere to center and zoom in 2×
- **Scroll Zoom** — Scroll up/down to zoom in/out at the cursor position
- **Pinch-to-Zoom** — Touch gesture support for mobile
- **5 Psychedelic Palettes** — Cycle through Rainbow, Fire & Ice, Electric, Deep Space, and Neon Dream
- **Smooth Iteration** — Fractional escape count for clean, banding-free gradients
- **Chunked Rendering** — Renders in 30-row chunks so the UI stays responsive
- **Auto-Adapting Iterations** — More iterations as you zoom deeper (manual slider, 20–1000)
- **Color Speed Slider** — Adjust how quickly colors cycle across iteration bands
- **HUD** — Shows center coordinates, zoom level, and max iterations
- **PNG Export** — Download the current view as a PNG
- **Touch Support** — Pan and pinch-to-zoom on mobile

## Controls

### Mouse

| Action | Result |
|---|---|
| **Click** | Zoom in 2× at that point |
| **Drag** | Pan the view |
| **Scroll up** | Zoom in at cursor |
| **Scroll down** | Zoom out at cursor |

### Touch

| Gesture | Result |
|---|---|
| **Tap** | Zoom in 2× at that point |
| **Drag** | Pan the view |
| **Pinch** | Zoom in/out |

### Buttons

| Button | Action |
|---|---|
| **⟲ Reset View** | Return to the full Mandelbrot set |
| **🎨 Cycle Palette** | Switch between 5 color palettes |
| **🔍 +** | Zoom in 2× at center |
| **🔍 −** | Zoom out 2× at center |
| **⬇ PNG** | Download current view as PNG |

### Keyboard

| Key | Action |
|---|---|
| `R` | Reset view |
| `P` | Cycle palette |
| `+` / `=` | Zoom in |
| `-` | Zoom out |

### Sliders

| Slider | Range | Default | Effect |
|---|---|---|---|
| **Max Iterations** | 20–1000 | 100 | Higher = more detail at deep zoom (slower) |
| **Color Speed** | 1–20 | 8 | Frequency of color cycling across iteration bands |

## Color Palettes

| # | Name | Vibe |
|---|---|---|
| 1 | **Rainbow** | Classic psychedelic |
| 2 | **Fire & Ice** | Warm reds/yellows → cool blues |
| 3 | **Electric** | Neon brights on black |
| 4 | **Deep Space** | Dark, cosmic purples and teals |
| 5 | **Neon Dream** | Hot pink, cyan, and lime |

## Rendering Details

- **Algorithm**: Standard escape-time algorithm with smooth (fractional) iteration count
- **Optimizations**: Cardioid/bulb detection for points known to be in the set
- **Color mapping**: Linearly interpolated between palette entries using smooth iteration value
- **Chunked rendering**: 30 rows per frame to keep the UI responsive during recomputation
- **Debounced slider**: Iteration slider re-renders 200ms after you stop dragging

## Tech Stack

- **Language**: Vanilla JavaScript (ES6)
- **Rendering**: Canvas 2D API with `ImageData` pixel buffer
- **Dependencies**: None — single self-contained HTML file
- **Precision**: Standard 64-bit IEEE 754 doubles (zoom depth ~10¹⁴ before pixel artifacts)

## File

```
C:\AI\Projects\Test1\games\mandelbrot.html
```

## Possible Enhancements

- Julia set mode (click a point to view its Julia set)
- Deep zoom with arbitrary precision (BigInt / WASM)
- Zoom history (back/forward navigation)
- Bookmark/shareable URLs with coordinates
- HiDPI / retina rendering
- Web Workers for non-blocking computation