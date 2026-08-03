# ✦ Particle Sandbox

A single-file HTML/JS physics playground where you can spawn, fling, and watch particles interact with gravity, wind, collisions, and bouncing. Click and drag to create particles — tweak every parameter in real time.

## Features

- **Click & Drag Spawning** — Click to burst particles, drag to create a continuous stream
- **Real-Time Physics** — Gravity, wind, drag, elastic collisions, and wall bouncing
- **Spatial Grid Collision** — Efficient particle-particle collision detection using a spatial hash grid
- **4 Toggle-able Forces**
  - 🌍 **Gravity** — Pulls particles downward (adjustable strength)
  - 🌬 **Wind** — Constant horizontal force (adjustable)
  - ⚡ **Collide** — Particles bounce off each other with elastic collision response
  - ↗ **Bounce** — Particles bounce off screen edges (off: particles die when leaving screen)
- **Live Controls** — Adjust particle size, spawn speed, gravity strength, and wind strength in real time
- **Color Picker** — Choose any color for spawned particles
- **Keyboard Shortcuts** — Quick toggle forces and switch color presets
- **Touch Support** — Works on mobile devices
- **FPS Counter** — Monitor performance
- **3,000 Particle Cap** — Automatic cleanup to maintain frame rate

## Controls

### Mouse / Touch

| Action | Result |
|---|---|
| **Click** | Spawn 8 particles at cursor |
| **Click & Drag** | Continuous stream of particles |
| **Touch & Drag** | Same on mobile |

### Buttons

| Button | Action |
|---|---|
| **✚ Spawn** | Burst 20 particles at a random location |
| **✦ Burst 50** | Burst 50 particles at a random location |
| **✕ Clear** | Remove all particles |

### Toggles

| Toggle | Default | Key | Effect |
|---|---|---|---|
| 🌍 **Gravity** | On | `G` | Pulls particles downward |
| 🌬 **Wind** | Off | `W` | Constant horizontal push |
| ⚡ **Collide** | On | `C` | Particles bounce off each other |
| ↗ **Bounce** | On | `B` | Particles bounce off walls (off = particles exit screen) |

### Sliders

| Slider | Range | Default | Controls |
|---|---|---|---|
| **Size** | 2–12 | 5 | Radius of spawned particles |
| **Speed** | 1–20 | 6 | Initial velocity of spawned particles |
| **Gravity** | 0–20 (0.0–2.0) | 0.6 | Downward acceleration |
| **Wind** | 0–10 (0.0–1.0) | 0.3 | Horizontal acceleration |

### Keyboard Shortcuts

| Key | Action |
|---|---|
| `G` | Toggle gravity |
| `W` | Toggle wind |
| `C` | Toggle collisions |
| `B` | Toggle bounce |
| `1` | Color preset: Orange |
| `2` | Color preset: Cyan |
| `3` | Color preset: Green |
| `4` | Color preset: Pink |

## Physics Engine

- **Sub-stepping** — 3 sub-steps per frame for stable collision resolution
- **Air drag** — Tiny velocity damping (0.999× per sub-step)
- **Elastic collisions** — Mass-based impulse response with restitution (0.7)
- **Spatial grid** — 20px cells for efficient `O(n)` broad-phase collision detection
- **Wall bounce** — 70% velocity retention on wall impact

## Tech Stack

- **Language**: Vanilla JavaScript (ES6)
- **Rendering**: Canvas 2D API with shadow blur for glow effects
- **Dependencies**: None — single self-contained HTML file
- **Physics**: Custom particle engine with spatial grid optimization

## File

```
C:\AI\Projects\Test1\games\particle-sandbox.html
```

## Possible Enhancements

- Particle presets (fire, smoke, water, sparkles)
- Trails / fade-out effect
- Attraction/repulsion points (click to add attractors)
- Brush size control
- Save/load configurations
- Background grid or pattern toggle