# 🎮 Mini Game Studio

A collection of **17 single-file HTML/JS games and interactive tools** — no dependencies, no build steps, just open and play. Each project is self-contained in a single `.html` file with full documentation in the `docs/` folder.

---

## 🏔️ [Landscape Generator](games/landscape-generator.html)
Procedural pixel-art terrain with layered noise and a seed system for sharing favorites.
📄 [Docs](docs/landscape-generator.md)

## 🐍 [Neon Snake](games/snake.html)
Classic snake with neon visuals, 5 power-ups, and progressive speed ramping.
📄 [Docs](docs/snake-game.md)

## ☄️ [Asteroid Shooter](games/asteroids.html)
Arcade space shooter where asteroids break apart. Waves, lives, and explosions.
📄 [Docs](docs/asteroid-shooter.md)

## ✦ [Particle Sandbox](games/particle-sandbox.html)
Physics playground with gravity, wind, collisions, and bouncing particles.
📄 [Docs](docs/particle-sandbox.md)

## 🌀 [Mandelbrot Explorer](games/mandelbrot.html)
Infinite zoom fractal viewer with 5 psychedelic color palettes.
📄 [Docs](docs/mandelbrot-explorer.md)

## 🎹 [Mini Piano / Sequencer](games/piano-sequencer.html)
Playable piano with step sequencer, 4 waveforms, visualizer, and WAV export.
📄 [Docs](docs/piano-sequencer.md)

## 🃏 [Memory Match](games/memory-match.html)
Flip cards to find matching pairs. Timer, move counter, configurable grid sizes.
📄 [Docs](docs/memory-match.md)

## 💣 [Minesweeper](games/minesweeper.html)
Classic minesweeper with flood-fill, flagging, and 3 difficulty levels.
📄 [Docs](docs/minesweeper.md)

## 🧩 [Sokoban](games/sokoban.html)
Push-box puzzle with 5 levels, undo support, and keyboard controls.
📄 [Docs](docs/sokoban.md)

## 🏓 [Pong / Breakout](games/pong-breakout.html)
Two classics in one. Break bricks or play Pong against an AI opponent.
📄 [Docs](docs/pong-breakout.md)

## 🌊 [Cellular Automata](games/cellular-automata.html)
Game of Life, Sand, and Seeds. Paint cells and watch them evolve.
📄 [Docs](docs/cellular-automata.md)

## ⚫ [Connect Four](games/connect-four.html)
Drop four in a row. Play against Minimax AI or 2-player local.
📄 [Docs](docs/connect-four.md)

## 🎨 [Pixel Art Editor](games/pixel-art-editor.html)
Draw pixel art with undo/redo, flood fill, color palette, and PNG export.
📄 [Docs](docs/pixel-art-editor.md)

## 🔮 [Reaction Test](games/reaction-test.html)
3 modes: Aim Trainer, Sequence Recall, and Moving Target.
📄 [Docs](docs/reaction-test.md)

## ⧫ [Neon Tetris](games/tetris.html)
Classic block stacking with ghost piece, hold, next queue, and 7-bag shuffle.
📄 [Docs](docs/tetris.md)

## ⚔ [Neon Tower Defense](games/tower-defense.html)
Build towers along the enemy path and survive 20 escalating waves.
📄 [Docs](docs/tower-defense.md)

## 🚀 [Neon Platformer](games/platformer.html)
2D platformer with double jump, enemies, hazards, and 5 handcrafted levels.
📄 [Docs](docs/platformer.md)

---

## 🗂 Project Structure

```
Test1/
├── index.html                 # 🏠 Catalog homepage (17 projects)
├── README.md
├── screenshots/               # 17 PNG screenshots
├── docs/                      # 17 markdown files
└── games/                     # 17 game HTML files
```

## 💻 Tech

All projects are built with **vanilla JavaScript (ES6)** and the **Canvas 2D API**. Zero dependencies, zero build tools — just open the `.html` files in any modern browser.

- **Audio**: Web Audio API (piano/sequencer)
- **AI**: Minimax with alpha-beta pruning (Connect Four)
- **Physics**: Particle collision, ball reflection, gravity simulation
- **Storage**: `localStorage` for high scores and best times
- **Compatibility**: Chrome, Firefox, Safari, Edge — desktop and mobile

## 🚀 Getting Started

1. Clone or download the repository
2. Open **`index.html`** for the visual catalog, or open any `.html` file from the `games/` folder
3. That's it — no server, no install, no build

## 🤖 How It Was Built

This project is a showcase of **AI-assisted game development**. Every game, the catalog homepage, the docs viewer, and the documentation were authored by an AI coding agent rather than written by hand.

**The toolchain:**

- **ZCode** — the interactive terminal-based coding agent used to design, write, and iterate on every file in this repo
- **OpenRouter** — the API gateway that routes the agent's requests to the underlying model
- **DeepSeek V4 Flash** — the large language model generating the code, visuals logic, and documentation

The workflow was simple: each game was requested in natural language, ZCode generated the single-file implementation, and the output was reviewed and refined in an interactive loop. All 17 games, the themed catalog (`index.html`), the documentation viewer (`docs-viewer.html`), and the served docs were produced this way.

> **TL;DR** — Human ideas + AI execution. Everything in `games/`, `docs/`, and the two top-level HTML files was generated with **ZCode + OpenRouter + DeepSeek V4 Flash**.

## 🧠 AI Model Testing

These games were designed to test different AI model capabilities:

| Capability | Game |
|---|---|
| Algorithm & Logic | Sokoban, Minesweeper, Connect Four, Tetris |
| Real-Time Physics | Pong/Breakout, Particle Sandbox |
| Simulation | Cellular Automata |
| Procedural Generation | Landscape Generator, Mandelbrot |
| Audio & Sequencing | Piano/Sequencer |
| Game Loop Design | Snake, Asteroid Shooter, Memory Match |
| Reflex & Timing | Reaction Test |
| Creative Tools | Pixel Art Editor |
| Strategy & Resource Mgmt | Tower Defense |
| Platforming & Level Design | Platformer |