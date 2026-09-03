# 🌊 Cellular Automata

A simulation sandbox with 3 rule systems: Conway's Game of Life, Falling Sand, and Seeds. Paint cells and watch them evolve.

## Features

- **3 Modes** — Life, Sand, and Seeds
- **Paint Brush** — Click and drag to draw cells (adjustable brush size)
- **Play/Pause** — Run the simulation at adjustable speed
- **Step** — Advance one generation at a time
- **Random Preset** — Fill the grid with random cells
- **Clear** — Reset the grid
- **Wrap-Around** — Life mode wraps edges for infinite patterns

## Modes

| Mode | Rule |
|---|---|
| 🌱 **Life** | Conway's Game of Life (B3/S23) |
| 🏖 **Sand** | Particles fall down, slide diagonally |
| 🌱 **Seeds** | B2/S — cells die unless they have exactly 2 neighbors |

## Controls

| Key | Action |
|---|---|
| **Click/Drag** | Paint cells |
| **Space** | Play/Pause |
| **1** | Life mode |
| **2** | Sand mode |
| **3** | Seeds mode |

## File

```
games/cellular-automata.html
```