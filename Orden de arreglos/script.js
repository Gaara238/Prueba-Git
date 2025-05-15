let numbers = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

let matrix1 = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

let matrix2 = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function fillMatrix() {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers[i].length; j++) {
      numbers[i][j] = randomNumber();
    }
  }
  console.log(numbers);
  orderAsc();
  orderDes();
}

function randomNumber() {
  let number = Math.floor(Math.random() * 100);
  return number;
}

function orderAsc() {
  for (let i = 0; i < matrix1.length; i++) {
    for (let j = 0; j < matrix1[i].length; j++) {
      matrix1[i][j] = numbers[i][j];
    }
  }
  let exit = false;
  let counterTemp = 0;
  while (exit === false) {
    let count = 0;
    let countTemp = 0;
    for (let i = 0; i < matrix1.length; i++) {
      for (let j = 0; j < matrix1[i].length; j++) {
        count++;
        if (countTemp === 2) {
          console.log(matrix1);
          return;
        }
        if (count === 3) {
          if (matrix1[i][j] > matrix1[i + 1][j - 2]) {
            counterTemp++;
            countTemp++;
            let varTemp = matrix1[i][j];
            matrix1[i][j] = matrix1[i + 1][j - 2];
            matrix1[i + 1][j - 2] = varTemp;
            count = 0;
          }
        }
        if (matrix1[i][j] > matrix1[i][j + 1]) {
          counterTemp++;
          let varTemp = matrix1[i][j];
          matrix1[i][j] = matrix1[i][j + 1];
          matrix1[i][j + 1] = varTemp;
        }
        if (counterTemp === 0) {
          exit = true;
        }
      }
    }
  }

  console.log(matrix1);
}

function orderDes() {
  for (let i = 0; i < matrix2.length; i++) {
    for (let j = 0; j < matrix2[i].length; j++) {
      matrix2[i][j] = numbers[i][j];
    }
  }
  for (let i = 0; i < matrix2.length; i++) {
    for (let j = 0; j < matrix2[i].length; j++) {
      if (matrix2[i][j] < matrix2[i][j + 1]) {
        let varTemp = matrix2[i][j];
        matrix2[i][j] = matrix2[i][j + 1];
        matrix2[i][j + 1] = varTemp;
      }
    }
  }
  console.log(matrix2);
}

fillMatrix();
