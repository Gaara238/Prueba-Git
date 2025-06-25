function invertirPalabras(words) {
  words += " ";
  let arrayOfWords = [];
  let word = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i] !== " ") {
      word += words[i];
    } else {
      let wordRev = "";
        for (let j = word.length - 1; j >= 0; j--) {
            wordRev += word[j];
        }
        arrayOfWords.push(wordRev);
        word = "";
    }
  }
  console.log(arrayOfWords);
}

invertirPalabras("hola mundo de JavaScript");