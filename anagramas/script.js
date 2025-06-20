function sonAnagramas(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let entry = false;
  let countLeters1 = 0;
  let countSymbols1 = 0;
  for (let i = 0; i < str1.length; i++) {
    let ascci1 = str1[i].charCodeAt();
    if (ascci1 > 96 && ascci1 < 123) {
      countLeters1++;
    } else {
      countSymbols1++;
    }
  }
  let sum1 = 0;
  if (countSymbols1 > 0) {
    sum1 = countLeters1 + countSymbols1;
  }
  if (sum1 === str1.length) {
    entry = true;
  } else {
    entry = false;
  }
  let countLeters2 = 0;
  let countSymbols2 = 0;
  for (let i = 0; i < str2.length; i++) {
    let ascci2 = str2[i].charCodeAt();
    if (ascci2 > 96 && ascci2 < 123) {
      countLeters2++;
    } else {
      countSymbols2++;
    }
  }
  let sum2 = 0;
  if (countSymbols2 > 0) {
      sum2 = countLeters2 + countSymbols2;
  }
  if (sum2 === str2.length) {
    entry = true;
  } else {
    entry = false;
  }
  if (str1.length === str2.length || entry) {
    let check1 = false;
    let count1 = 0;
    for (let i = 0; i < str1.length; i++) {
      let ascci = str1[i].charCodeAt();
      for (let j = 0; j < str2.length; j++) {
        if (ascci > 96 && ascci < 123) {
          if (str1[i] === str2[j]) {
            count1++;
            break;
          }
        } else {
          count1++;
          break;
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
        if (ascci > 96 && ascci < 123) {
          if (str2[i] === str1[j]) {
            count2++;
            break;
          }
        } else {
          count2++;
          break;
        }
      }
    }
    if (count2 === str2.length) {
      check2 = true;
    } else {
      check2 = false;
    }
    if (check1 && check2) {
      alert("true");
    } else {
      alert("false");
    }
  } else {
    alert("false");
  }
}

sonAnagramas("programar", "gramarpro");