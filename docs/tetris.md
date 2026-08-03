# ⧫ Neon Tetris

A single-file HTML/JS implementation of the classic block-stacking arcade game with neon visuals, ghost piece, hold mechanic, 7-bag shuffle, and progressive speed ramping.

## Features

- **Classic Tetris** — 10×20 grid with 7 tetrominoes (I, J, L, O, S, T, Z)
- **Rotation with Wall Kicks** — tries small horizontal offsets when rotating near walls
- **Ghost Piece** — highlights where the current piece will land
- **Hold Mechanic** — store a piece for later (one use per lock)
- **Next Queue** — see the upcoming piece
- **7-Bag Shuffle** — guarantees a fair distribution of pieces across the bag
- **Scoring** — standard line-clear scoring (single/ double/ triple/ tetris) multiplied by level
- **Level Progression** — level up every 10 lines, each level increases fall speed
- **Hard & Soft Drop** — instant drop (with bonus points) and tunable soft drop
- **Persistent High Score** — saved to `localStorage`

## Controls

| Key | Action |
|---|---|
| **← →** | Move left / right |
| **↑** or **W** | Rotate clockwise |
| **↓** or **S** | Soft drop (fall faster) |
| **Space** | Hard drop (instant) |
| **C** | Hold / swap piece |
| **P** or **Esc** | Pause / resume |

## Scoring

| Action | Points |
|---|---|
| Single line | 100 × level |
| Double line | 300 × level |
| Triple line | 500 × level |
| Tetris (4 lines) | 800 × level |
| Hard drop | 2 × distance dropped |

## Tech Stack

- **Language**: Vanilla JavaScript (ES6)
- **Rendering**: Canvas 2D API
- **Dependencies**: None — single self-contained HTML file
- **Storage**: `localStorage` for high scores

## File

```
games/tetris.html
```

## Possible Enhancements

- 180° spin with SRS kicks
- DAS/ARR input tuning options
- Mobile touch controls (swipe + tap)
- Ghost/particle trails and screen-shake on line clear
