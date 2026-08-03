// Auto-generated embedded docs
const DOCS = {
  'asteroid-shooter': `# ☄️ Asteroid Shooter

A single-file HTML/JS arcade game where you pilot a ship through an asteroid field, blasting rocks that break apart into smaller pieces. Inspired by the classic Asteroids (1979).

## Features

- **Ship Controls** — Rotate, thrust with animated flame, and shoot
- **Asteroid Fracturing** — Large → Medium → Small (3 sizes, each splits into 2)
- **Wave System** — Each cleared wave spawns more asteroids (capped at 12)
- **Scoring** — 20 pts (large) → 50 pts (medium) → 100 pts (small)
- **3 Lives** — Invincibility blink on respawn (2 seconds)
- **Explosion Particles** — Burst effects on asteroid hits and ship destruction
- **High Score** — Saved to \`localStorage\` across sessions
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
- **Storage**: \`localStorage\` for high scores

## File

\`\`\`
C:\\AI\\Projects\\Test1\\games\\asteroids.html
\`\`\`

## Possible Enhancements

- Power-up pickups (shield, spread shot, hyperspace)
- UFO enemies that shoot back
- Mobile touch controls (virtual joystick + fire button)
- Different asteroid sizes/colors per wave
- Sound effects (Web Audio API)`,
  'cellular-automata': `# 🌊 Cellular Automata

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

\`\`\`
C:\\AI\\Projects\\Test1\\games\\cellular-automata.html
\`\`\``,
  'connect-four': `# ⚫ Connect Four

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

\`\`\`
C:\\AI\\Projects\\Test1\\games\\connect-four.html
\`\`\``,
  'landscape-generator': `# 🏔️ Procedural Landscape Generator

A single-file HTML/JS app that generates unique pixel-art landscapes using layered value noise, with a seed-based system for saving and sharing your favorites.

## Features

- **Seeded PRNG** — Mulberry32 algorithm ensures the same seed always produces the same landscape
- **Fractal Brownian Motion** — 1–8 octaves of layered 2D value noise for natural-looking terrain
- **Pixel-Art Rendering** — Adjustable pixel size (1×1 to 8×8) for retro aesthetics
- **7-Biome Color Palette**
  - 🌊 Deep Water → Shallow Water → Sand → Grass → Forest → Mountain → Snow
- **Customizable Colors** — Click any biome swatch to pick a custom color
- **URL Sharing** — All settings encoded in the URL hash (\`#seed=12345&octaves=6&pixel=4\`)
- **PNG Export** — One-click download of the current landscape
- **Responsive Layout** — Works on desktop and mobile

## How to Use

| Control | Action |
|---|---|
| **Seed input** | Enter a number and press Enter or click Generate |
| **🎲 Random** | Generate a random seed |
| **🌱 Generate** | Re-generate with current settings |
| **Octaves slider** | More octaves = more detail (1–8) |
| **Pixel Size slider** | Bigger pixels = chunkier look (1–8) |
| **Palette swatches** | Click to change biome colors |
| **🔗 Copy Link** | Copies a shareable URL to clipboard |
| **⬇ PNG** | Downloads the landscape as a PNG image |

## Sharing

The URL encodes the full state:
\`\`\`
index.html#seed=724183&octaves=6&pixel=4
\`\`\`

Send the link to anyone — they'll see the exact same landscape. No server required.

## Tech Stack

- **Language**: Vanilla JavaScript (ES6)
- **Rendering**: Canvas 2D API
- **Dependencies**: None — single self-contained HTML file
- **Noise Algorithm**: 2D value noise with bilinear interpolation + smoothstep

## File

\`\`\`
C:\\AI\\Projects\\Test1\\games\\landscape-generator.html
\`\`\`

## Possible Enhancements

- Animated transitions between seeds
- Side-view terrain elevation preview
- Color palette presets (fantasy, mars, toxic wasteland)
- Larger canvas sizes with web workers`,
  'mandelbrot-explorer': `# 🌀 Mandelbrot Zoom Explorer

A single-file HTML/JS interactive fractal viewer for the Mandelbrot set. Pan, zoom, and explore the infinite boundary with psychedelic color palettes and smooth iteration rendering.

## Features

- **Infinite Zoom** — Zoom in 2× on click, or scroll to any depth (limited only by floating-point precision)
- **Pan** — Click and drag to explore freely
- **Click-to-Zoom** — Click anywhere to center and zoom in 2×
- **Scroll Zoom** — Scroll up/down to zoom in/out at the cursor position
- **Pinch-to-Zoom** — Touch gesture support for mobile
- **5 Psychedelic Palettes** — Cycle through Rainbow, Fire & Ice, Electric, Deep Space, and Neon Dream
- **Smooth Iteration** — Fractional escape count for clean, banding-free gradients
- **Chunked Rendering** — Renders in 30-row chunks so the UI stays responsive
- **Auto-Adapting Iterations** — More iterations as you zoom deeper (manual slider, 20–1000)
- **Color Speed Slider** — Adjust how quickly colors cycle across iteration bands
- **HUD** — Shows center coordinates, zoom level, and max iterations
- **PNG Export** — Download the current view as a PNG
- **Touch Support** — Pan and pinch-to-zoom on mobile

## Controls

### Mouse

| Action | Result |
|---|---|
| **Click** | Zoom in 2× at that point |
| **Drag** | Pan the view |
| **Scroll up** | Zoom in at cursor |
| **Scroll down** | Zoom out at cursor |

### Touch

| Gesture | Result |
|---|---|
| **Tap** | Zoom in 2× at that point |
| **Drag** | Pan the view |
| **Pinch** | Zoom in/out |

### Buttons

| Button | Action |
|---|---|
| **⟲ Reset View** | Return to the full Mandelbrot set |
| **🎨 Cycle Palette** | Switch between 5 color palettes |
| **🔍 +** | Zoom in 2× at center |
| **🔍 −** | Zoom out 2× at center |
| **⬇ PNG** | Download current view as PNG |

### Keyboard

| Key | Action |
|---|---|
| \`R\` | Reset view |
| \`P\` | Cycle palette |
| \`+\` / \`=\` | Zoom in |
| \`-\` | Zoom out |

### Sliders

| Slider | Range | Default | Effect |
|---|---|---|---|
| **Max Iterations** | 20–1000 | 100 | Higher = more detail at deep zoom (slower) |
| **Color Speed** | 1–20 | 8 | Frequency of color cycling across iteration bands |

## Color Palettes

| # | Name | Vibe |
|---|---|---|
| 1 | **Rainbow** | Classic psychedelic |
| 2 | **Fire & Ice** | Warm reds/yellows → cool blues |
| 3 | **Electric** | Neon brights on black |
| 4 | **Deep Space** | Dark, cosmic purples and teals |
| 5 | **Neon Dream** | Hot pink, cyan, and lime |

## Rendering Details

- **Algorithm**: Standard escape-time algorithm with smooth (fractional) iteration count
- **Optimizations**: Cardioid/bulb detection for points known to be in the set
- **Color mapping**: Linearly interpolated between palette entries using smooth iteration value
- **Chunked rendering**: 30 rows per frame to keep the UI responsive during recomputation
- **Debounced slider**: Iteration slider re-renders 200ms after you stop dragging

## Tech Stack

- **Language**: Vanilla JavaScript (ES6)
- **Rendering**: Canvas 2D API with \`ImageData\` pixel buffer
- **Dependencies**: None — single self-contained HTML file
- **Precision**: Standard 64-bit IEEE 754 doubles (zoom depth ~10¹⁴ before pixel artifacts)

## File

\`\`\`
C:\\AI\\Projects\\Test1\\games\\mandelbrot.html
\`\`\`

## Possible Enhancements

- Julia set mode (click a point to view its Julia set)
- Deep zoom with arbitrary precision (BigInt / WASM)
- Zoom history (back/forward navigation)
- Bookmark/shareable URLs with coordinates
- HiDPI / retina rendering
- Web Workers for non-blocking computation`,
  'memory-match': `# 🃏 Memory Match

A single-file HTML/JS card-flip matching game with timer, move counter, and configurable grid sizes.

## Features

- **Flip & Match** — Click cards to reveal emoji, match pairs to clear the board
- **3 Grid Sizes** — 4×4 (8 pairs), 5×5 (12 pairs), 6×6 (18 pairs)
- **Timer** — Tracks your completion time
- **Move Counter** — Counts every flip attempt
- **Win Celebration** — Overlay with final stats when all pairs are matched
- **Animations** — Smooth card flips and matched-pair glow effects

## Controls

| Action | Result |
|---|---|
| **Click card** | Flip it to reveal the emoji |
| **🔄 New Game** | Restart with same grid size |
| **4×4 / 5×5 / 6×6** | Cycle through grid sizes |

## Tech

- **Language**: Vanilla JavaScript (ES6)
- **Rendering**: DOM elements with CSS transitions
- **Dependencies**: None

## File

\`\`\`
C:\\AI\\Projects\\Test1\\games\\memory-match.html
\`\`\``,
  'minesweeper': `# 💣 Minesweeper

Classic minesweeper with flood-fill reveal, flagging, and 3 difficulty levels.

## Features

- **Flood-Fill** — Clicking an empty cell reveals all connected empty cells
- **Flagging** — Right-click to flag suspected mines
- **3 Sizes** — 9×9 (10 mines), 12×12 (20 mines), 16×16 (40 mines)
- **Timer** — Tracks your completion time
- **First-Click Safety** — The first click is always safe (mines placed after)
- **Win/Lose Overlays** — Clear visual feedback

## Controls

| Action | Result |
|---|---|
| **Left-click** | Reveal cell |
| **Right-click** | Place/remove flag |
| **🔄 New Game** | Restart |
| **9×9 / 12×12 / 16×16** | Cycle difficulty |

## File

\`\`\`
C:\\AI\\Projects\\Test1\\games\\minesweeper.html
\`\`\``,
  'particle-sandbox': `# ✦ Particle Sandbox

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
| 🌍 **Gravity** | On | \`G\` | Pulls particles downward |
| 🌬 **Wind** | Off | \`W\` | Constant horizontal push |
| ⚡ **Collide** | On | \`C\` | Particles bounce off each other |
| ↗ **Bounce** | On | \`B\` | Particles bounce off walls (off = particles exit screen) |

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
| \`G\` | Toggle gravity |
| \`W\` | Toggle wind |
| \`C\` | Toggle collisions |
| \`B\` | Toggle bounce |
| \`1\` | Color preset: Orange |
| \`2\` | Color preset: Cyan |
| \`3\` | Color preset: Green |
| \`4\` | Color preset: Pink |

## Physics Engine

- **Sub-stepping** — 3 sub-steps per frame for stable collision resolution
- **Air drag** — Tiny velocity damping (0.999× per sub-step)
- **Elastic collisions** — Mass-based impulse response with restitution (0.7)
- **Spatial grid** — 20px cells for efficient \`O(n)\` broad-phase collision detection
- **Wall bounce** — 70% velocity retention on wall impact

## Tech Stack

- **Language**: Vanilla JavaScript (ES6)
- **Rendering**: Canvas 2D API with shadow blur for glow effects
- **Dependencies**: None — single self-contained HTML file
- **Physics**: Custom particle engine with spatial grid optimization

## File

\`\`\`
C:\\AI\\Projects\\Test1\\games\\particle-sandbox.html
\`\`\`

## Possible Enhancements

- Particle presets (fire, smoke, water, sparkles)
- Trails / fade-out effect
- Attraction/repulsion points (click to add attractors)
- Brush size control
- Save/load configurations
- Background grid or pattern toggle`,
  'piano-sequencer': `# 🎹 Mini Piano / Sequencer

A single-file HTML/JS music toy combining a playable piano keyboard with a 16-step sequencer, multiple waveforms, and a live audio visualizer.

## Features

- **Playable Piano** — Two full octaves (C3–B4), click or use keyboard keys
- **16-Step Sequencer** — 8 notes across 16 steps (configurable: 8, 16, or 32)
- **4 Waveforms** — Sine, Square, Sawtooth, Triangle — switch on the fly
- **Live Visualizer** — Real-time waveform and frequency bar display
- **BPM Control** — 40–240 BPM, adjusts tempo on the fly
- **Volume Control** — Master volume slider
- **Octave Shift** — Keyboard input respects the selected octave
- **Export WAV** — Download the sequencer pattern as a \`.wav\` file
- **Preset Patterns** — Start with an empty grid and build your own

## Controls

### Mouse

| Action | Result |
|---|---|
| **Click piano key** | Play note (release to stop) |
| **Click sequencer cell** | Toggle note on/off at that step |
| **▶ Play / ⏸ Pause** | Start/stop sequencer playback |
| **⏹ Stop** | Stop and reset to step 1 |
| **✕ Clear Seq** | Clear all sequencer cells |
| **~ Waveform** | Cycle through Sine → Square → Sawtooth → Triangle |
| **⬇ Save WAV** | Export the current pattern as a WAV file |

### Keyboard

| Key | Action |
|---|---|
| **A** | C3 |
| **W** | C#3 |
| **S** | D3 |
| **E** | D#3 |
| **D** | E3 |
| **F** | F3 |
| **T** | F#3 |
| **G** | G3 |
| **Y** | G#3 |
| **H** | A3 |
| **U** | A#3 |
| **J** | B3 |
| **K** | C4 |
| **O** | C#4 |
| **L** | D4 |
| **P** | D#4 |
| **;** | E4 |
| **Space** | Play / Pause |
| **1–4** | Switch waveform |

### Controls

| Control | Range | Default | Effect |
|---|---|---|---|
| **BPM** | 40–240 | 120 | Tempo of the sequencer |
| **Volume** | 0–100 | 60 | Master volume |
| **Octave** | 2–5 | 3 | Octave for keyboard input |
| **Steps** | 8, 16, 32 | 16 | Sequencer length |

## Sequencer Notes

The sequencer has 8 rows:
- C3, D3, E3, F3, G3, A3, B3, C4

Each cell toggles on/off with a click. The current step is highlighted in yellow during playback (green when a note is playing).

## Visualizer

- **Waveform**: Top line shows the live waveform of the most recently played note
- **Frequency bars**: Bottom section shows a real-time frequency spectrum
- Idle state shows a flat center line

## Export

The WAV export renders the full sequencer pattern using the current waveform and BPM settings. It applies a fade-in/fade-out envelope to each note and normalizes the output. The file is named \`sequencer-{bpm}bpm-{waveform}.wav\`.

## Tech Stack

- **Language**: Vanilla JavaScript (ES6)
- **Audio**: Web Audio API (OscillatorNode, GainNode, AnalyserNode)
- **Rendering**: Canvas 2D API for visualizer
- **Dependencies**: None — single self-contained HTML file
- **Export**: WAV file generated from raw PCM data

## File

\`\`\`
C:\\AI\\Projects\\Test1\\games\\piano-sequencer.html
\`\`\`

## Possible Enhancements

- MIDI input support
- Sequencer pattern presets / save/load
- Reverb, delay, or filter effects
- Chord mode / arpeggiator
- Record live piano into sequencer
- More visualizer modes (spectrogram, oscilloscope)`,
  'pixel-art-editor': `# 🎨 Pixel Art Editor

A browser-based pixel art drawing tool with undo/redo, flood fill, configurable canvas size, and PNG export.

## Features

- **Drawing** — Click and drag to paint pixels
- **Eraser** — Toggle eraser mode to remove pixels
- **Flood Fill** — Click to fill contiguous areas with color
- **Undo/Redo** — Full history stack (up to 50 states)
- **Color Palette** — 14 preset colors + custom color picker
- **Canvas Sizes** — 8×8, 16×16, 24×32, 48×48
- **Pen Size** — 1×1 to 4×4 brush
- **Grid Lines** — Subtle guides for precision
- **PNG Export** — Download your artwork

## Controls

| Key | Action |
|---|---|
| **Click/Drag** | Paint |
| **Z** | Undo |
| **Y** | Redo |
| **E** | Toggle eraser |
| **G** | Flood fill mode |

## File

\`\`\`
C:\\AI\\Projects\\Test1\\games\\pixel-art-editor.html
\`\`\``,
  'pong-breakout': `# 🏓 Pong / Breakout

Two classic arcade games in one HTML file. Break bricks or play Pong against an AI opponent.

## Features

- **Dual Mode** — Switch between Breakout and Pong
- **Breakout** — 5 rows of bricks, progressive difficulty, lives system
- **Pong** — AI opponent paddle with ball tracking, score tracking
- **Score & High Score** — Persistent high score via localStorage
- **Ball Physics** — Angle reflection based on paddle hit position, speed ramping
- **Lives** — 3 lives in Breakout mode

## Controls

| Key | Action |
|---|---|
| **← →** | Move paddle |
| **Space** | Launch ball |

| Button | Action |
|---|---|
| **🔄 Breakout / Pong** | Switch game mode |

## File

\`\`\`
C:\\AI\\Projects\\Test1\\games\\pong-breakout.html
\`\`\``,
  'reaction-test': `# 🔮 Reaction Time Test

Test your reflexes across 3 modes: Aim Trainer, Sequence Recall, and Moving Target. Tracks your best times via localStorage.

## Modes

| Mode | Description |
|---|---|
| 🎯 **Aim** | Click targets that appear around the screen (10 rounds) |
| 🧠 **Sequence** | Remember and repeat an expanding sequence of quadrants |
| 🏃 **Chaser** | Click a moving target that speeds up as you hit it (10 hits) |

## Features

- **Best Times** — Persisted per mode via localStorage
- **Average Tracking** — See your current session average
- **Visual Feedback** — Pulsing targets, glow effects, and trail animations
- **Progressive Difficulty** — Each mode gets harder as you improve

## Controls

| Action | Result |
|---|---|
| **Click target** | Hit it (score varies by mode) |
| **🔄 Next Mode** | Cycle through 3 modes |
| **🔄 Reset** | Reset the current mode |

## File

\`\`\`
C:\\AI\\Projects\\Test1\\games\\reaction-test.html
\`\`\``,
  'snake-game': `# 🐍 Neon Snake Game

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
- **High Score** — Saved to \`localStorage\` across sessions
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
| Speed | 🔴 Orange | \`⚡ Speed\` | Speeds up the snake |
| Slow | 🔵 Blue | \`❄ Slow\` | Slows down the snake |
| Grow | 🟣 Pink | \`💎 Grow\` | Adds 3 segments instantly |
| Shrink | 🟢 Green | \`✂ Shrink\` | Trims to 3 segments |
| Shield | 🟡 Yellow | \`🛡 Shield\` | Blocks one collision |

Active power-ups are shown as badges below the HUD with remaining time.

## Scoring

- **Food**: 10 points per apple
- **Power-ups**: 15 points for Grow pickup
- **Level up**: Every 50 points (increases speed)

## Tech Stack

- **Language**: Vanilla JavaScript (ES6)
- **Rendering**: Canvas 2D API
- **Dependencies**: None — single self-contained HTML file
- **Storage**: \`localStorage\` for high scores

## File

\`\`\`
C:\\AI\\Projects\\Test1\\games\\snake.html
\`\`\`

## Possible Enhancements

- Mobile touch controls (swipe gestures)
- More power-up types (ghost, magnet, bomb)
- Different visual themes
- Multiplayer on same keyboard`,
  'sokoban': `# 🧩 Sokoban

Push-box puzzle game with 5 levels, undo support, and keyboard controls.

## Features

- **5 Levels** — Increasing difficulty
- **Undo** — Step back through your moves
- **Reset** — Restart the current level
- **Level Navigation** — Previous/Next buttons
- **Win Detection** — All boxes on goals = level complete
- **Keyboard Controls** — Arrow keys or WASD

## Controls

| Key | Action |
|---|---|
| **↑ ↓ ← →** or **W A S D** | Move player |
| **Z** | Undo last move |
| **R** | Reset level |

| Button | Action |
|---|---|
| **↩ Undo** | Step back |
| **🔄 Reset** | Restart level |
| **◀ Prev / Next ▶** | Change level |

## File

\`\`\`
C:\\AI\\Projects\\Test1\\games\\sokoban.html
\`\`\``,
};

