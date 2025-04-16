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
      let card = document.createElement("img");
      card.src = board[i][j].img;
      card.id = "card";
      card.dataset.img = board[i][j].img;
      card.dataset.x = board[i][j].position.x;
      card.dataset.y = board[i][j].position.y;
      card.addEventListener("click", handleCartClick);
      container.appendChild(card);
    }
  }
}

function handleCartClick(e) {
  console.log(e.target.dataset);
  countTemp++;
  if (countTemp === 1) {
    img1 = e.target.dataset.img;
  }
  if (countTemp === 2) {
    count++;
    document.getElementById("movement-counter").textContent = count;
    countTemp = 0;
    img2 = e.target.dataset.img;
    if (img1 === img2) {
      console.log("Son iguales");
      img1 = null;
      img2 = null;
    }
  }
}

window.addEventListener("DOMContentLoaded", function () {
  createPair();
});
