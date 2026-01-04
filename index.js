/* =====================================================
   1. ELEMENT SELECTION
===================================================== */

const startButton = document.querySelector(".start-button");
const board = document.querySelector(".game-board");
const gameOverText = document.querySelector(".h1");


/* =====================================================
   2. GAME STATE (DATA)
===================================================== */

const colors = ["red", "yellow", "green", "blue"];

let gameSequence = [];
let userSequence = [];
let canClick = false;


/* =====================================================
   3. EVENT LISTENERS
===================================================== */

startButton.addEventListener("click", startGame);

board.addEventListener("click", handleUserClick);


/* =====================================================
   4. GAME FLOW FUNCTIONS
===================================================== */

// Start / Restart the game
function startGame() {
  resetGame();
  nextRound();
}

// Prepare next round
function nextRound() {
  canClick = false;
  userSequence = [];

  const randomColor = getRandomColor();
  gameSequence.push(randomColor);

  playSequence();
}


/* =====================================================
   5. SEQUENCE PLAYBACK
===================================================== */

// Play the full game sequence
function playSequence() {
  let index = 0;

  const interval = setInterval(() => {
    playColor(gameSequence[index]);
    index++;

    if (index === gameSequence.length) {
      clearInterval(interval);
      canClick = true;
    }
  }, 600);
}

// Play a single color
function playColor(color) {
  const tile = document.querySelector(`.${color}`);
  const audio = new Audio(`/audio/${color}.mp3`);

  tile.classList.add("active");
  audio.play();

  setTimeout(() => {
    tile.classList.remove("active");
  }, 300);
}


/* =====================================================
   6. USER INPUT
===================================================== */

function handleUserClick(event) {
  if (!canClick) return;

  const tile = event.target.closest(".tile");
  if (!tile) return;

  const color = getTileColor(tile);
  if (!color) return;

  playColor(color);
  userSequence.push(color);

  checkAnswer();
}


/* =====================================================
   7. GAME LOGIC
===================================================== */

function checkAnswer() {
  const currentIndex = userSequence.length - 1;

  // Wrong click
  if (userSequence[currentIndex] !== gameSequence[currentIndex]) {
    gameOver();
    return;
  }

  // Round completed
  if (userSequence.length === gameSequence.length) {
    canClick = false;
    setTimeout(nextRound, 800);
  }
}

function gameOver() {
  new Audio("/audio/gameover.mp3").play();
  gameOverText.style.display = "block";
  canClick = false;
}


/* =====================================================
   8. HELPER FUNCTIONS
===================================================== */

function resetGame() {
  gameSequence = [];
  userSequence = [];
  gameOverText.style.display = "none";
}

function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function getTileColor(tile) {
  return colors.find(color => tile.classList.contains(color));
}
