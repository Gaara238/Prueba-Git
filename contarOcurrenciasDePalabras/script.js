let arrayOfWords = [];
let result = {};


function createArtibutes(words) {
  words += " ";
  let word = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i] !== " ") {
      word += words[i];
    } else {
      result[word] = 0;
      arrayOfWords.push(word);
      word = "";
    }
  }
}

function countRepeatWords() {
  for (let i = 0; i < arrayOfWords.length; i++) {
    let count = 0;
    for (let j = 0; j < arrayOfWords.length; j++) {
      if (arrayOfWords[i] === arrayOfWords[j]) {
        count++;
      }
    }
    result[arrayOfWords[i]] = count;
  }
  console.log(result);
  console.log(arrayOfWords);
}

createArtibutes("hola mundo hola javascript mundo hola");
countRepeatWords();
