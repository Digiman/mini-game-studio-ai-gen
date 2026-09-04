# 🟩 Neon Wordle

A single-file HTML/JS implementation of the popular word-guessing game with neon styling, daily and random modes, on-screen and physical keyboards, and persistent stats.

## Features

- **6×5 Grid** — guess the hidden 5-letter word in up to 6 tries
- **Color Feedback** — green (correct position), yellow (in word, wrong position), gray (not in word)
- **Daily & Random Modes** — a date-seeded daily word plus unlimited random games
- **On-Screen & Physical Keyboard** — tap keys or type; keyboard color-codes each letter
- **Invalid Word Handling** — shaking row animation for non-dictionary guesses
- **Embedded Word List** — ~700 common 5-letter words, zero dependencies
- **Stats Tracking** — games played, win %, current & max streak saved to `localStorage`
- **Guess Distribution** — bar chart of solved-in-N tries
- **Staggered Tile Reveal** — letters flip in sequence with a pop animation

## Controls

| Key | Action |
|---|---|
| **A–Z** | Type a letter |
| **Enter** | Submit guess |
| **Backspace** | Delete last letter |
| Tap keys (touch) | On-screen keyboard |

## Scoring

| Outcome | Stat |
|---|---|
| Solve in N tries (1–6) | Win recorded, streak +1, distribution[N]++ |
| Fail all 6 tries | Streak reset to 0 |

## Tech Stack

- **Language**: Vanilla JavaScript (ES6)
- **Rendering**: DOM (grid + keyboard), no canvas required
- **Dependencies**: None — single self-contained HTML file
- **Storage**: `localStorage` for stats object

## File

```
games/wordle.html
```

## Possible Enhancements

- Hard mode (must use revealed hints)
- Wider word list and answer-rotation to avoid repeats
- Audio feedback for correct/incorrect letters
- Share the result as emoji grid
