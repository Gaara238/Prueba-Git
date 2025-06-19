function sonAnagramas(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let check1 = false;
  let count1 = 0;
  for (let i = 0; i < str1.length; i++) {
    let ascci = str1[i].charCodeAt();
    for (let j = 0; j < str2.length; j++) {
      if (ascci === 32) {
        count1++;
      }
      if (ascci > 96 && ascci < 123) {
        if (str1[i] === str2[j]) {
          count1++;
          break;
        }
      }
    }
  }
  if (count1 === str1.length) {
    check1 = true;
  } else {
    check1 = false;
  }
  let check2 = false;
  let count2 = 0;
  for (let i = 0; i < str2.length; i++) {
    let ascci = str2[i].charCodeAt();
    for (let j = 0; j < str1.length; j++) {
      if (ascci === 32) {
        count2++;
      }
      if (ascci > 96 && ascci < 123) {
        if (str2[i] === str1[j]) {
          count2++;
          break;
        }
      }
    }
  }
  if (count2 === str1.length) {
    check2 = true;
  } else {
    check2 = false;
  }
  if (check1 && check2) {
    alert("true");
  } else {
    alert("false");
  }
}

sonAnagramas("programar", "mgarapror");
