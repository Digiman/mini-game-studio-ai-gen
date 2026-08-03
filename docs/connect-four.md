# ⚫ Connect Four

Drop four discs in a row to win. Play against a Minimax AI opponent or locally with 2 players.

## Features

- **Minimax AI** — Alpha-beta pruned search tree (depth 4) with board evaluation
- **2-Player Mode** — Play against a friend on the same device
- **Win Detection** — Horizontal, vertical, and diagonal 4-in-a-row
- **Draw Detection** — All 42 cells filled with no winner
- **Animated Drops** — Discs fall into the grid
- **Keyboard Support** — Drop by column number

## Controls

| Action | Result |
|---|---|
| **Click column** | Drop disc |
| **1–7** | Drop in column 1–7 |
| **R** | Restart game |

| Button | Action |
|---|---|
| **🤖 vs AI / 👥 2 Players** | Toggle mode |
| **🔄 New Game** | Restart |

## AI Details

- **Algorithm**: Minimax with alpha-beta pruning
- **Depth**: 4-ply search
- **Evaluation**: Center column preference + 2/3-in-a-row scoring
- **Response**: AI moves ~300ms after player

## File

```
C:\AI\Projects\Test1\games\connect-four.html
```