let words = ["sol", "cielo", "mar", "sol", "flor", "luna"];
let final = {};

function organizeWords() {
  for (let i = 0; i < words.length; i++) {
    let numberOfLeters = words[i].length;
    if (final[JSON.stringify(numberOfLeters)] === undefined) {
      final[JSON.stringify(numberOfLeters)] = [words[i]];
    } else {
      final[JSON.stringify(numberOfLeters)].push(words[i]);
    }
  }
  console.log(words);
  console.log(final);
}

organizeWords();
