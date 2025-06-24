function sonAnagramas(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let str1Aux = "";
  let str2Aux = "";
  for (let i = 0; i < str1.length; i++) {
    if (str1[i].charCodeAt() > 96 && str1[i].charCodeAt() < 123) {
      str1Aux += str1[i];
    }
  }
  str1 = str1Aux;
  for (let i = 0; i < str2.length; i++) {
    if (str2[i].charCodeAt() > 96 && str2[i].charCodeAt() < 123) {
      str2Aux += str2[i];
    }
  }
  str2 = str2Aux;
  if (str1.length === str2.length) {
    let check1 = false;
    let count1 = 0;
    for (let i = 0; i < str1.length; i++) {
      for (let j = 0; j < str2.length; j++) {
        if (str1[i] === str2[j]) {
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
      for (let j = 0; j < str1.length; j++) {
        if (str2[i] === str1[j]) {
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

sonAnagramas("hola", "adios");
