# ⚔ Neon Tower Defense

A single-file HTML/JS tower defense game where you build defensive towers along a winding enemy path to survive 20 escalating waves. Includes four tower types, upgrades, selling, and splash/slow mechanics.

## Features

- **Fixed Path** — enemies follow a winding route from start to end
- **4 Tower Types**
  - 🔫 **Gun** — cheap, fast, single-target
  - ❄ **Frost** — slows enemies it hits
  - 🎯 **Sniper** — long range, high single-hit damage
  - 💥 **Cannon** — splash damage in an area
- **Upgrades** — each tower upgrades through 3 tiers (damage & range scale)
- **Sell Towers** — recover partial value
- **Wave System** — 20 hand-crafted escalating waves
- **Enemy Variety** — normal, fast, and tank enemies on later waves
- **Economy** — earn gold from kills and wave completion bonuses
- **Lives** — lose lives when enemies reach the end

## Controls

| Control | Action |
|---|---|
| **Click tower button / 1-4** | Select tower type to place |
| **Click free cell** | Place selected tower |
| **Click placed tower** | Select it (shows range) |
| **S / Sell button** | Switch to sell mode, then click tower |
| **Space / Start Wave** | Launch the next wave |

## Tower Details

| Tower | Cost | Range | Damage | Special |
|---|---|---|---|---|
| Gun | $40 | 120 | 12 | Fast fire rate |
| Frost | $60 | 100 | 5 | Slows targets |
| Sniper | $100 | 220 | 40 | Long range |
| Cannon | $140 | 130 | 30 | Splash damage |

Upgrade cost: `$80 × current level` (track of 3 tiers).

## Win / Lose

- **Win** — survive all 20 waves
- **Lose** — run out of lives

## Tech Stack

- **Language**: Vanilla JavaScript (ES6)
- **Rendering**: Canvas 2D API
- **Dependencies**: None — single self-contained HTML file

## File

```
games/tower-defense.html
```

## Possible Enhancements

- More tower types (poison, multi-shot, missile)
- Buildable path (place your own route)
- Speed controls (1× / 2× / 3×)
- Boss waves and special rewards
