# 🐍 Neon Snake Game

A single-file HTML/JS retro snake game with neon visuals, power-ups, progressive speed ramping, and persistent high scores.

## Features

- **Classic Snake Mechanics** — 20×20 grid with wall wrapping
- **5 Power-Up Types**
  - ⚡ **Speed** — Snake moves 40% faster (5s duration)
  - ❄ **Slow** — Snake moves 50% slower (5s duration)
  - 💎 **Grow** — Instantly grows by 3 segments (+15 pts)
  - ✂ **Shrink** — Cuts snake back to 3 segments
  - 🛡 **Shield** — Absorbs one self-collision (6s duration)
- **Speed Ramping** — Base speed increases by 8ms per level (level up every 50 points, minimum 50ms)
- **Neon Visuals** — Cyan head, gradient body, glow effects, animated title
- **High Score** — Saved to `localStorage` across sessions
- **Pause Support** — Press Space or Esc to pause/resume

## Controls

| Key | Action |
|---|---|
| **↑ ↓ ← →** or **W A S D** | Steer the snake |
| **Space** or **Esc** | Pause / Resume |

## Power-Ups

Power-ups appear randomly on the field (2% chance per tick, only when none present). They are color-coded and glow with unique auras:

| Power-Up | Color | Badge | Effect |
|---|---|---|---|
| Speed | 🔴 Orange | `⚡ Speed` | Speeds up the snake |
| Slow | 🔵 Blue | `❄ Slow` | Slows down the snake |
| Grow | 🟣 Pink | `💎 Grow` | Adds 3 segments instantly |
| Shrink | 🟢 Green | `✂ Shrink` | Trims to 3 segments |
| Shield | 🟡 Yellow | `🛡 Shield` | Blocks one collision |

Active power-ups are shown as badges below the HUD with remaining time.

## Scoring

- **Food**: 10 points per apple
- **Power-ups**: 15 points for Grow pickup
- **Level up**: Every 50 points (increases speed)

## Tech Stack

- **Language**: Vanilla JavaScript (ES6)
- **Rendering**: Canvas 2D API
- **Dependencies**: None — single self-contained HTML file
- **Storage**: `localStorage` for high scores

## File

```
games/snake.html
```

## Possible Enhancements

- Mobile touch controls (swipe gestures)
- More power-up types (ghost, magnet, bomb)
- Different visual themes
- Multiplayer on same keyboard