class NumberOfLeters {
  constructor(three, four, five) {
    this["3"] = three;
    this["4"] = four;
    this["5"] = five;
  }
}

let words = ["sol", "luna", "mar", "cielo", "sol", "flor"];
let numberOfLtr = [];

function numberOfL() {
  for (let i = 0; i < words.length; i++) {
    let count = 0;
    for (let j = 0; j < words[i].length; j++) {
      count++;
    }
    numberOfLtr.push(count);
  }
}

function organizeWords() {
  let three = [];
  let four = [];
  let five = [];
  for (let i = 0; i < numberOfLtr.length; i++) {
    if (numberOfLtr[i] === 3) {
      three.push(words[i]);
    }
    if (numberOfLtr[i] === 4) {
      four.push(words[i]);
    }
    if (numberOfLtr[i] === 5) {
      five.push(words[i]);
    }
  }
  let instanceWords = new NumberOfLeters(three, four, five);
  console.log(words);
  console.log(instanceWords);
}

numberOfL();
organizeWords();
