class NumberOfLeters {
  constructor(three, four, five) {
    this["3"] = three;
    this["4"] = four;
    this["5"] = five;
  }
}

let words = ["sol", "luna", "mar", "cielo", "sol", "flor"];

function organizeWords() {
  let three = [];
  let four = [];
  let five = [];
  for (let i = 0; i < words.length; i++) {
    switch (words[i].length) {
      case 3:
        three.push(words[i]);
        break;
      case 4:
        four.push(words[i]);
        break;
      case 5:
        five.push(words[i]);
        break;
    }
  }
  let instanceWords = new NumberOfLeters(three, four, five);
  console.log(words);
  console.log(instanceWords);
}

organizeWords();
