// console.log("    *    ");
// console.log("   ***   ");
// console.log("  *****  ");
// console.log(" ******* ");
// console.log("*********");

function generatePyramids(numberOfLines) {
  let string = [];
  let line = "";
  let number = 1;
  for (let i = 1; i < numberOfLines; i++) {
    number = number + 2;
  }
  console.log(number);

  for (let i = 0; i < number; i++) {
    string.push(" ");
  }
  console.log(string);
  let countA = numberOfLines - 1;
  let countD = numberOfLines - 1;
  for (let i = 0; i < string.length; i++) {
    string[countA] = "*";
    console;
    string[countD] = "*";
    countA++;
    countD--;
    for (let j = 0; j < string.length; j++) {
      line += string[j];
    }
    console.log(line);
  }
}

function generatePyramids2(numberOfLines) {
  let number = 1;
  for (let i = 1; i < numberOfLines; i++) {
    number += 2;
  }
  let string = [];
  for (let i = 0; i < number; i++) {
    string.push(" ");
  }
  let cA = numberOfLines - 1;
  let cD = numberOfLines - 1;
  for (let i = 0; i < string.length; i++) {
    string[cA] = "*";
    string[cD] = "*";
    let line = "";
    for (let j = 0; j < string.length; j++) {
      line += string[j];
    }
    console.log(line);
    cA++;
    cD--;
    if (cA > string.length || cA === string.length) {
      return;
    }
  }
}

generatePyramids2(3);

// generatePyramids(5);
