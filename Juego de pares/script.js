let board = [
  [null, null, null, null],
  [null, null, null, null],
  [null, null, null, null],
  [null, null, null, null],
];

let pairs = [];

class Pair {
  constructor(img, position) {
    this.img = img;
    this.position = position;
  }
}

function createPair() {
  let img = chooseImg();
  let position1 = choosePosition();
  let position2 = choosePosition();
  while (position2 === position1) {
    position2 = choosePosition();
  }
  // for (let i = 0; i < pairs.length; i++) {
  //   if (pairs[i].img === img) {
  //     while (pairs[i].img === img) {
  //       img = chooseImg;
  //     }
  //   }
  //   if (pairs[i].position === position1) {
  //     while (pairs[i].position === position1) {
  //       position1 = choosePosition;
  //     }
  //   }
  //   if (pairs[i].position === position2) {
  //     while (pairs[i].position === position2) {
  //       position2 = choosePosition;
  //     }
  //   }
  // }
  let pair1 = new Pair(img, position1);
  let pair2 = new Pair(img, position2);
  pairs.push(pair1);
  pairs.push(pair2);
  console.log(pairs);
}

function chooseImg() {
  let randomNumber = Math.floor(Math.random() * 7);
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
    return "img/Minato.jpg";
  }
}

function choosePosition() {
  let x = Math.floor(Math.random() * 3);
  let y = Math.floor(Math.random() * 3);
  return {
    x: x,
    y: y,
  };
}

createPair();
