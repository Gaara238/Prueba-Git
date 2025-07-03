function comprimirCadena(str) {
  let number = 0;
  let leter = "";
  let compressedString = "";
  for (let i = 0; i < str.length + 1; i++) {
    if (str[i] !== leter) {
      if (number > 0) {
        compressedString += leter;
        compressedString += number;
      }
      leter = str[i];
      number = 0;
    }
    number++;
  }
  console.log(compressedString);
}

comprimirCadena("aaabbcdddd");
