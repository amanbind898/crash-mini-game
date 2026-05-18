# Crash Mini Game 🎮

A fast-paced crash betting game built with **PixiJS** and **TypeScript**. Experience the thrill of placing bets, watching a multiplier climb, and deciding when to cash out before the airplane crashes!
<img width="1363" height="631" alt="image" src="https://github.com/user-attachments/assets/a7f4e437-771d-4b38-a14b-6ce496a61cdf" />

## Features

✨ **Core Gameplay**
- 🛫 Animated airplane flight with smooth multiplier progression
- 💰 Multiplier-based betting system (bet and watch your winnings multiply)
- 🎯 Real-time balance tracking
- 🚨 Crash mechanics with instant game over
- 💵 Cashout system to lock in your winnings before the crash

🎮 **Technical Highlights**
- Built with **PixiJS** for high-performance 2D graphics
- **TypeScript** for type-safe game logic
- **Vite** build tool for fast development and production builds
- Game loop implementation with proper async timing
- Smooth UI interaction and state management

## Getting Started

### Prerequisites
- **Node.js** (v16+)
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/amanbind898/crash-mini-game.git
cd crash-mini-game

# Install dependencies
npm install
```

### Running the Game

**Development Mode** (with hot reload):
```bash
npm run dev
```
This starts a local dev server. Open your browser and navigate to `http://localhost:5173` (or the URL shown in terminal).

**Build for Production**:
```bash
npm run build
```
Outputs optimized files to the `dist/` directory.

**Preview Production Build**:
```bash
npm run preview
```

## How to Play

1. **Start Game**: Click the **"Bet 100 $"** button to place your initial bet
2. **Watch the Multiplier**: The airplane takes flight and the multiplier climbs (1x, 2x, 3x, etc.)
3. **Decide When to Cashout**: 
   - Click **"CASHOUT"** to lock in your winnings at the current multiplier
   - Example: If you bet $100 at 2.5x multiplier, you get $250
4. **Avoid the Crash**: If the airplane crashes before you cashout, you lose your bet
5. **Manage Your Balance**: Track your balance in the HUD and keep betting strategically

## Project Structure

```
crash-mini-game/
├── index.html          # Main HTML file with embedded styles
├── package.json        # Project dependencies (PixiJS, Vite, TypeScript)
├── package-lock.json   # Locked dependencies
├── tsconfig.json       # TypeScript configuration
├── src/
│   └── main.ts        # Main game entry point
└── dist/              # Production build output (generated)
```

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| **PixiJS** (v8.18.1) | 2D rendering engine |
| **TypeScript** | Language (v6.0) |
| **Vite** (v8.0) | Build tool & dev server |



## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**amanbind898** - [GitHub Profile](https://github.com/amanbind898)

---

**Made with ❤️ for game development learning**
