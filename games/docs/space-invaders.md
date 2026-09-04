# 👾 Neon Space Invaders

A single-file HTML/JS implementation of the classic retro fixed-canvas shooter with neon visuals, breakable shields, UFO bonuses, and progressive waves.

## Features

- **Invader Formation** — 11×5 grid of invaders with distinct sprite variants and animated legs
- **Edge Bounce & Step Down** — the formation sweeps side to side and drops when it hits the walls
- **Breakable Shields** — 4 neon shields that erode as bullets hit them (3 damage states)
- **UFO Bonus** — a flying saucer crosses the top for bonus points
- **Progressive Waves** — enemies speed up and fire more aggressively each wave
- **Player Ship** — move with arrows/touch and hold to auto-fire
- **Neon Explosion Particles** — every hit bursts into glowing particles
- **3 Lives** — lose a life when shot or when the formation reaches the player
- **Persistent High Score** — saved to `localStorage`

## Controls

| Key | Action |
|---|---|
| **← →** or **A D** | Move player ship |
| **Space** | Fire (hold for auto-fire) |
| **P** / **Esc** | Pause / resume |
| **R** | Restart |
| Touch drag | Move ship; touch to fire |

## Scoring

| Target | Points |
|---|---|
| Bottom-row invader | 10 |
| Middle-row invader | 20 |
| Top-row invader | 30 |
| UFO | 150 + wave bonus |

## Tech Stack

- **Language**: Vanilla JavaScript (ES6)
- **Rendering**: Canvas 2D API
- **Dependencies**: None — single self-contained HTML file
- **Storage**: `localStorage` for high score

## File

```
games/space-invaders.html
```

## Possible Enhancements

- Power-ups (double-shot, shields, spread fire)
- Boss invader encounters every few waves
- Sound effects via the Web Audio API
- High-score table across sessions
