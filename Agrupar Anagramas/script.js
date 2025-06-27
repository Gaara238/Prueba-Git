function groupAnagramas(words) {
  let matrix = [];
  for (let i = 0; i < words.length; i++) {
    let wordsTemp = [];
    let wordOne = words[i];
    for (let j = 0; j < words.length; j++) {
      let wordTwo = words[j];
      let check = isAAnagrama(wordOne, wordTwo);
      if (check) {
        let exist1 = existInTheArray(wordOne, wordsTemp);
        if (!exist1) {
          wordsTemp.push(wordOne);
        }
        let exist2 = existInTheArray(wordTwo, wordsTemp);
        if (!exist2) {
          wordsTemp.push(wordTwo);
        }
      }
    }
    matrix.push(wordsTemp);
  }
  console.log(matrix);
}

function isAAnagrama(str1, str2) {
  let check1 = false;
  let count1 = 0;
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        count1++;
      }
    }
  }
  if (count1 === str1.length) {
    check1 = true;
  }
  let check2 = false;
  let count2 = 0;
  for (let i = 0; i < str2.length; i++) {
    for (let j = 0; j < str1.length; j++) {
      if (str2[i] === str1[j]) {
        count2++;
      }
    }
  }
  if (count2 === str2.length) {
    check2 = true;
  }
  if (check1 && check2) {
    return true;
  } else {
    return false;
  }
}

function existInTheArray(word, array) {
  let varAux = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      varAux = true;
      break;
    }
  }
  return varAux;
}

groupAnagramas(["eat", "tea", "tan", "ate", "nat", "bat"]);
