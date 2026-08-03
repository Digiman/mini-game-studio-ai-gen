# 🎹 Mini Piano / Sequencer

A single-file HTML/JS music toy combining a playable piano keyboard with a 16-step sequencer, multiple waveforms, and a live audio visualizer.

## Features

- **Playable Piano** — Two full octaves (C3–B4), click or use keyboard keys
- **16-Step Sequencer** — 8 notes across 16 steps (configurable: 8, 16, or 32)
- **4 Waveforms** — Sine, Square, Sawtooth, Triangle — switch on the fly
- **Live Visualizer** — Real-time waveform and frequency bar display
- **BPM Control** — 40–240 BPM, adjusts tempo on the fly
- **Volume Control** — Master volume slider
- **Octave Shift** — Keyboard input respects the selected octave
- **Export WAV** — Download the sequencer pattern as a `.wav` file
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

The WAV export renders the full sequencer pattern using the current waveform and BPM settings. It applies a fade-in/fade-out envelope to each note and normalizes the output. The file is named `sequencer-{bpm}bpm-{waveform}.wav`.

## Tech Stack

- **Language**: Vanilla JavaScript (ES6)
- **Audio**: Web Audio API (OscillatorNode, GainNode, AnalyserNode)
- **Rendering**: Canvas 2D API for visualizer
- **Dependencies**: None — single self-contained HTML file
- **Export**: WAV file generated from raw PCM data

## File

```
C:\AI\Projects\Test1\games\piano-sequencer.html
```

## Possible Enhancements

- MIDI input support
- Sequencer pattern presets / save/load
- Reverb, delay, or filter effects
- Chord mode / arpeggiator
- Record live piano into sequencer
- More visualizer modes (spectrogram, oscilloscope)