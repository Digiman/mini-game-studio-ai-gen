# 🧩 Neon Sudoku

A single-file HTML/JS Sudoku game with a built-in puzzle generator (solver + symmetry removal), notes/pencil marks, hints, undo, and best-time tracking per difficulty.

## Features

- **4 Difficulties** — Easy / Medium / Hard / Expert, each with more blank cells
- **Built-in Generator** — solves a random grid, then removes cells symmetrically while guaranteeing a unique solution
- **Notes / Pencil Marks** — toggle notes mode to jot down candidate numbers in a cell
- **Error Highlighting** — wrong entries are highlighted in red; mistakes are counted
- **Timer** — tracks your solving time
- **Hint** — reveals the correct value for the selected cell
- **Undo** — step back through placements, erasures, and hints
- **Keyboard + Number Pad** — place numbers with keys 1–9 or on-screen buttons
- **Persistent Best Times** — saved per difficulty in `localStorage`

## Controls

| Key / Action | Result |
|---|---|
| **1–9** | Place number in selected cell |
| **Del / Backspace** | Erase selected cell |
| **↑ ↓ ← →** | Move selection |
| **N** | Toggle notes mode |
| **H** | Reveal hint for selected cell |
| **Z** | Undo last action |
| **On-screen** | Number pad + Undo / Notes / Hint / Erase buttons |

## Scoring

Your time is recorded on completion. The best (fastest) time is saved per difficulty under `sudoku_best_<difficulty>` and shown in the HUD.

## Tech Stack

- **Language**: Vanilla JavaScript (ES6)
- **Rendering**: DOM (9×9 table grid)
- **Dependencies**: None — single self-contained HTML file
- **Storage**: `localStorage` (`sudoku_best_easy` / `sudoku_best_medium` / `sudoku_best_hard` / `sudoku_best_expert`)

## File

```
games/sudoku.html
```

## Possible Enhancements

- Auto-candidate highlighting (naked singles)
- "Guess" branching mode with conflict detection
- Board export/import via string
- Shift+number to place a note directly
