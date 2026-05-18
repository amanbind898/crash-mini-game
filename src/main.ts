import { Application, Assets, Sprite, BitmapText } from 'pixi.js'
import { Balance } from './Balance'

(async () => {
  const sleep = (ms: number) => new Promise(res => setTimeout(res, ms));

  // ---------------- paytable ----------------
  const BalanceObj = new Balance(1500);

  let randomCrash = 0;
  let gameStart = false;
  let multiplier = 0;
  let betAmount = 100;
  let isCrashed = false;

  const balancetxt = document.getElementById("balanceText");
  function updateBalance() {
    if (balancetxt) {
      balancetxt.textContent = BalanceObj.getBalance().toString();
    }
  }
  updateBalance();

  const betBtn = document.getElementById("betbtn")
  const cashoutbtn = document.getElementById("cashout")

  // ---------------- PIXI SETUP ----------------
  const canvasContainer = document.getElementById('canvas') as HTMLElement;
  const app = new Application();
  globalThis.__PIXI_APP__ = app;

  await app.init({
    resizeTo: canvasContainer,
    background: '#1490a7',
  });

  canvasContainer.appendChild(app.canvas);

  // assets
  const texture = await Assets.load('/airplane.png');
  await Assets.load('https://pixijs.com/assets/bitmap-font/desyrel.xml');

  // text
  const bitmapFontText = new BitmapText({
    text: 'Crash Game 20x',
    style: {
      fontFamily: 'Desyrel',
      fontSize: 44,
      align: 'center',
    },
  });

  bitmapFontText.anchor = 0.5;
  bitmapFontText.x = app.screen.width / 2;
  bitmapFontText.y = 200;
  app.stage.addChild(bitmapFontText);

  // airplane
  const airplane = new Sprite(texture);
  airplane.anchor.set(0.5);
  airplane.scale.set(0.5);
  airplane.x = 0;
  airplane.y = app.screen.height;
  app.stage.addChild(airplane);

  // ---------------- GAME LOOP ----------------
  app.ticker.start(); 

  app.ticker.add(() => {
    if (!gameStart || isCrashed) return;

    const targetHeight = app.screen.height / 2;
    const maxRotation = Math.PI / 7;

    airplane.x += 0.4;

    if (airplane.y > targetHeight) {
      airplane.y -= 0.3;

      if (airplane.rotation < maxRotation) {
        airplane.rotation += 0.0001;
      }
    } else {
      airplane.y = targetHeight;

      if (airplane.rotation < maxRotation) {
        airplane.rotation += 0.002;
      }
    }

    // crash condition
    if (multiplier >= randomCrash) {
      isCrashed = true;
      gameStart = false;

      bitmapFontText.text = ">>>> CRASH <<<<";
      return;
    }

    multiplier += 0.02;
    bitmapFontText.text = multiplier.toFixed(2) + "x";
  });

  // ---------------- BET BUTTON ----------------
  if (betBtn) {
    betBtn.addEventListener("click", async () => {
      if (gameStart) return;

      BalanceObj.substractBalance(betAmount);
      updateBalance();

      // reset state
      gameStart = false;
      isCrashed = false;
      multiplier = 0;

      airplane.x = 0;
      airplane.y = app.screen.height;
      airplane.rotation = 0;

      randomCrash = Math.random() * 10 + 2;

      // countdown 
      for (let i = 3; i >= 1; i--) {
        bitmapFontText.text = i.toString();
        await sleep(1000);
      }

      bitmapFontText.text = "Take Off!";
      await sleep(500);

      multiplier = 0;
      gameStart = true;
    });
  }

  // ---------------- CASHOUT BUTTON ----------------
  if (cashoutbtn) {
    cashoutbtn.addEventListener("click", () => {
      if (!gameStart) {
        window.alert("Place Bet !!");
        return;
      }

      if (!isCrashed) {
        BalanceObj.addBalance(betAmount * multiplier);
      }

      gameStart = false;
      multiplier = 0;

      updateBalance();
    });
  }

})();
