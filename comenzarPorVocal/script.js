function startForVocal(words) {
  words += " ";
  let arrayOfWords = [];
  let word = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i] !== " ") {
      word += words[i];
    } else {
      for (let j = 0; j < 1; j++) {
        switch (word[j]) {
          case "a":
          case "e":
          case "i":
          case "o":
          case "u":
          case "A":
          case "E":
          case "I":
          case "O":
          case "U":
            arrayOfWords.push(word);
            break;
        }
      }
      word = "";
    }
  }
  console.log(arrayOfWords);
}

function startForConsonant(words) {
  words += " ";
  let arrayOfWords = [];
  let word = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i] !== " ") {
      word += words[i];
    } else {
      let check = false;
      for (let j = 0; j < 1; j++) {
        let ascci = word[j].charCodeAt();
        if ((ascci > 64 && ascci < 91) || (ascci > 96 && ascci < 123)) {
          switch (word[j]) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
            case "A":
            case "E":
            case "I":
            case "O":
            case "U":
              check = false;
              break;
            default:
              check = true;
          }
        }
      }
      if (check) {
        arrayOfWords.push(word);
      }
      word = "";
    }
  }
  console.log(arrayOfWords);
}

startForVocal("Esta es una pueba de filtrado de palabras");
startForConsonant("Esta es una pueba de filtrado de palabras");