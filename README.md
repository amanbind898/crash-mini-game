# Crash Mini Game 🎮

A simple crash betting game built with **PixiJS** and **TypeScript**.

## Quick Start

```bash
npm install
npm run dev
```

## How to Play

1. Click **"Bet 100 $"** to start
2. Watch the multiplier climb
3. Click **"CASHOUT"** before the crash to win
4. Winnings = Bet × Multiplier

## Project Structure

```
src/
├── main.ts      # Game loop, airplane animation, bet/cashout logic
└── Balance.ts   # Player balance management
```

## PixiJS Concepts Used

- **Application** - Core game engine and renderer
- **Sprite** - Airplane graphics (2D image rendering)
- **BitmapText** - Game text display (multiplier, status messages)
- **Assets** - Loading images and fonts
- **Ticker** - Game loop for smooth animation
- **Screen & Stage** - Canvas rendering and display hierarchy
- **Transform Properties** - Position (x, y), rotation, scale for animation

## Tech Stack

- PixiJS 8.18.1 (2D rendering)
- TypeScript
- Vite (dev server & build)

## Game Mechanics

- **Multiplier**: Increases by 0.02 each frame
- **Crash**: Random value between 0x - 20.0x
- **Balance**: Track bets and winnings
- **Countdown**: 3-second countdown before each round

Made with ❤️
