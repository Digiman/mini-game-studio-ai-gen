# 🚀 Neon Platformer

A single-file HTML/JS 2D platformer with gravity physics, double jump, enemies, hazards, coins, and 5 handcrafted levels. Collect coins, stomp enemies, and reach the flag to advance.

## Features

- **Platforming Physics** — acceleration, friction, variable jump, double jump, max fall speed
- **One-Way Platforms** — jump up through, land on top
- **Moving Platforms** — riding horizontal platforms
- **5 Handcrafted Levels** — tutorial, spike alley, moving ground, vertical climb, final sprint
- **Enemies** — stomp to defeat, or take damage by touching them
- **Hazards** — spike traps
- **Collectibles** — coins scattered through each level
- **Lives & Respawn** — lose a life on death, respawn at the level start
- **Goal Flag** — touch it to clear the level
- **Camera** — smooth-following camera with level bounds

## Controls

| Key | Action |
|---|---|
| **← →** or **A D** | Move |
| **↑ / Space** or **W** | Jump (press mid-air to double jump) |
| **R** | Restart the level |
| **P** | Pause / resume |

## Gameplay Tips

- Wait for moving platforms to align before jumping.
- Stomp enemies from above to defeat them safely.
- Double jump is essential on the vertical climb level.
- Coins carry over between levels; lives are shared across all levels.

## Win / Lose

- **Win** — complete all 5 levels
- **Lose** — run out of lives

## Tech Stack

- **Language**: Vanilla JavaScript (ES6)
- **Rendering**: Canvas 2D API
- **Dependencies**: None — single self-contained HTML file
- **Levels**: ASCII tile maps parsed at runtime

## File

```
games/platformer.html
```

## Possible Enhancements

- Coins-per-level completion tracking
- More enemy AI (jumping, flying)
- Checkpoint flags within levels
- Water/fall-through tiles and secret areas
- Sound effects and music
