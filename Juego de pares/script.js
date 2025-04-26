let board = [
  [null, null, null, null],
  [null, null, null, null],
  [null, null, null, null],
  [null, null, null, null],
];

let pairs = [];

let count = 0;
let countTemp = 0;
let img1 = null;
let img2 = null;
let countTime = null;
let timeTotal = null;
let intervalTime = null;
let finishGame = 0;

class Pair {
  constructor(img, position) {
    this.img = img;
    this.position = position;
  }
}

function createPair() {
  for (let i = 0; i <= 7; i++) {
    let img = null;
    while (img === null) {
      img = chooseImg();
      for (let j = 0; j < pairs.length; j++) {
        if (img === pairs[j].img) {
          img = null;
          break;
        }
      }
    }
    let position1 = {
      x: null,
      y: null,
    };
    while (position1.x === null && position1.y === null) {
      position1 = choosePosition();
      for (let j = 0; j < pairs.length; j++) {
        if (
          position1.x === pairs[j].position.x &&
          position1.y === pairs[j].position.y
        ) {
          position1.x = null;
          position1.y = null;
          break;
        }
      }
    }
    let pair1 = new Pair(img, position1);
    pairs.push(pair1);
    let position2 = {
      x: null,
      y: null,
    };
    while (position2.x === null && position2.y === null) {
      position2 = choosePosition();
      for (let j = 0; j < pairs.length; j++) {
        if (
          position2.x === pairs[j].position.x &&
          position2.y === pairs[j].position.y
        ) {
          position2.x = null;
          position2.y = null;
          break;
        }
      }
    }
    let pair2 = new Pair(img, position2);
    pairs.push(pair2);
  }
  createCarts();
}

function chooseImg() {
  let randomNumber = Math.floor(Math.random() * 8);
  if (randomNumber === 0) {
    return "img/Naruto.webp";
  }
  if (randomNumber === 1) {
    return "img/Gaara.png";
  }
  if (randomNumber === 2) {
    return "img/Kakashi.jpg";
  }
  if (randomNumber === 3) {
    return "img/Madara.png";
  }
  if (randomNumber === 4) {
    return "img/Migth Gay.jpg";
  }
  if (randomNumber === 5) {
    return "img/Obito.webp";
  }
  if (randomNumber === 6) {
    return "img/Sasuke.jpg";
  }
  if (randomNumber === 7) {
    return "img/Tobirama.jpg";
  }
}

function choosePosition() {
  let x = Math.floor(Math.random() * 4);
  let y = Math.floor(Math.random() * 4);
  return {
    x: x,
    y: y,
  };
}

function createCarts() {
  for (let i = 0; i < pairs.length; i++) {
    board[pairs[i].position.x][pairs[i].position.y] = pairs[i];
  }
  let container = document.getElementById("cards-container");
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let father = document.createElement("div");
      father.dataset.img = board[i][j].img;
      father.dataset.x = board[i][j].position.x;
      father.dataset.y = board[i][j].position.y;
      father.addEventListener("click", handleCartClick);
      father.classList.add("father");
      let front = document.createElement("div");
      front.classList.add("card-front");
      father.appendChild(front);

      let card = document.createElement("img");
      card.classList.add("card-back");
      card.src = board[i][j].img;
      father.appendChild(card);
      container.appendChild(father);
    }
  }
}

function handleCartClick(e) {
  if (countTemp === 2) {
    return;
  }
  countTemp++;
  let father = e.target.closest(".father");
  if (father.classList.contains("flipped")) {
    countTemp = 1;
  }
  father.classList.add("flipped");
  if (countTemp === 1) {
    img1 = father;
  }
  if (countTemp === 2) {
    count++;
    document.getElementById("movement-counter").textContent = count;
    img2 = father;
    if (img1.dataset.img === img2.dataset.img) {
      countTemp = 0;
      finishGame++;
      if (finishGame === 8) {
        finishTheGame();
      }
      img1 = null;
      img2 = null;
    } else {
      setTimeout(function () {
        img1.classList.remove("flipped");
        img2.classList.remove("flipped");
        countTemp = 0;
      }, 1000);
    }
  }
}

function finishTheGame() {
  clearInterval(intervalTime);
  let message = document.getElementById("finalMessage");
  message.textContent =
    "Feliciaciones has sido capaz de completar el juego en " +
    count +
    " movimientos y " +
    timeTotal +
    " segundos.";
}

function counterTime() {
  let time = document.getElementById("time");
  countTime = 0;
  intervalTime = setInterval(function () {
    countTime++;
    timeTotal = countTime;
    time.textContent = countTime;
  }, 1000);
}

function restartGame() {
  board = [
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
  ];
  pairs = [];
  document.getElementById("cards-container").innerHTML = "";
  createPair();
  count = 0;
  document.getElementById("movement-counter").textContent = count;
  countTemp = 0;
  countTime = 0;
  document.getElementById("time").textContent = countTime;
  counterTime();
  document.getElementById("finalMessage").textContent = "";
  finishGame = 0;
}

window.addEventListener("DOMContentLoaded", function () {
  createPair();
  counterTime();
});
