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

function descomprimirCadena(str) {
  let number = null;;
  let leter = "";
  let count = 0;
  let descompressedString = "";
  for (let i = 0; i < str.length; i++) {
    count++;
    if (count === 1) {
      leter = str[i];
    }
    if (count === 2) {
      number = parseInt(str[i]);
      for (let j = 0; j < number; j++) {
        descompressedString += leter;
      }
      count = 0;
    }
  }
  console.log(descompressedString);
}

comprimirCadena("aaabbcdddd");
descomprimirCadena("a3b2c1d4");
