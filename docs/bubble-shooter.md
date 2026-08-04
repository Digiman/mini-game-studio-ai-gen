# 🫧 Neon Bubble Shooter

A single-file HTML/JS bubble shooter with a hexagonal grid arena, one-bounce trajectory guide, cluster popping, floating-group drops, and escalating waves.

## Features

- **Hex Grid Arena** — bubbles arranged on a staggered hexagonal grid
- **Aim & Shoot** — aim with mouse or touch; a dotted guide (with one-bounce off the wall) shows the trajectory
- **Cluster Popping** — shooting a bubble into a group of 3+ same color pops the whole cluster
- **Floating-Group Drops** — any bubbles disconnected from the ceiling fall away for bonus points
- **Progressive Waves** — score drives level-ups with an expanding color pool
- **Color Queue** — see the current and upcoming bubble colors
- **Persistent High Score** — saved to `localStorage`
- **Start & Game-Over Overlays** — with new-high-score badge

## Controls

| Action | Input |
|---|---|
| Aim | Move **mouse** or drag **touch** |
| Shoot | **Click** (or **Space** / **↑**) |
| Move shooter | **← →** arrow keys |

## Scoring

| Action | Points |
|---|---|
| Pop a cluster of 3+ | 10 × bubbles popped |
| Dropped (floating) group | 5 × bubbles dropped |

Your level advances every 80 points, and the highest score is saved as your best.

## Tech Stack

- **Language**: Vanilla JavaScript (ES6)
- **Rendering**: Canvas 2D API
- **Dependencies**: None — single self-contained HTML file
- **Storage**: `localStorage` (`neon_bubble_high`)

## File

```
games/bubble-shooter.html
```

## Possible Enhancements

- Power-ups (rainbow bubble, bomb, color erase)
- One-bounce wall indicator refinement
- Combo/multiplier bonuses for back-to-back pops
- Ambient particle effects and screen shake on large pops
