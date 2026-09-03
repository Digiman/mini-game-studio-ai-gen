# ☄️ Asteroid Shooter

A single-file HTML/JS arcade game where you pilot a ship through an asteroid field, blasting rocks that break apart into smaller pieces. Inspired by the classic Asteroids (1979).

## Features

- **Ship Controls** — Rotate, thrust with animated flame, and shoot
- **Asteroid Fracturing** — Large → Medium → Small (3 sizes, each splits into 2)
- **Wave System** — Each cleared wave spawns more asteroids (capped at 12)
- **Scoring** — 20 pts (large) → 50 pts (medium) → 100 pts (small)
- **3 Lives** — Invincibility blink on respawn (2 seconds)
- **Explosion Particles** — Burst effects on asteroid hits and ship destruction
- **High Score** — Saved to `localStorage` across sessions
- **Pause Support** — Press P or Esc to pause/resume
- **Screen Wrapping** — Everything (ship, bullets, asteroids) wraps around edges

## Controls

| Key | Action |
|---|---|
| **← →** or **A / D** | Rotate ship |
| **↑** or **W** | Thrust (hold for continuous thrust) |
| **Space** | Shoot (250ms cooldown) |
| **P** or **Esc** | Pause / Resume |

## Gameplay

### Asteroids

| Size | Radius | Points | Splits Into |
|---|---|---|---|
| Large | 40px | 20 | 2 Medium |
| Medium | 22px | 50 | 2 Small |
| Small | 11px | 100 | Nothing (destroyed) |

Each asteroid has a randomized jagged polygon shape with 7–12 vertices, rotates slowly, and glows orange.

### Ship

- Triangle-shaped hull with cyan glow
- Thruster flame flickers when thrusting (orange/yellow)
- Cockpit dot on the nose
- Wraps around screen edges
- 2-second invincibility after respawn (blinking effect)

### Waves

- Starts with **4 large asteroids**
- Each cleared wave increases count by 1
- Maximum 12 asteroids per wave
- Asteroids spawn from screen edges

## Tech Stack

- **Language**: Vanilla JavaScript (ES6)
- **Rendering**: Canvas 2D API
- **Dependencies**: None — single self-contained HTML file
- **Storage**: `localStorage` for high scores

## File

```
games/asteroids.html
```

## Possible Enhancements

- Power-up pickups (shield, spread shot, hyperspace)
- UFO enemies that shoot back
- Mobile touch controls (virtual joystick + fire button)
- Different asteroid sizes/colors per wave
- Sound effects (Web Audio API)