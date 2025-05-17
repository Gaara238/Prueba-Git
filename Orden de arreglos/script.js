let board = [
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

let array1 = [];
let array2 = [];

function fillMatrix() {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      board[i][j] = randomNumber();
    }
  }
  console.log(board);
  orderAsc();
  orderDes();
}

function randomNumber() {
  let number = Math.floor(Math.random() * 100);
  return number;
}

function orderAsc() {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      array1.push(board[i][j]);
    }
  }
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array1.length; j++) {
      if (array1[j] > array1[j + 1]) {
        let varTemp = array1[j];
        array1[j] = array1[j + 1];
        array1[j + 1] = varTemp;
      }
    }
  }
  let count = 0;
  for (let i = 0; i < matrix1.length; i++) {
    for (let j = 0; j < matrix1[i].length; j++) {
      matrix1[i][j] = array1[count];
      count++;
    }
  }
  console.log(matrix1);
}

function orderDes() {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      array2.push(board[i][j]);
    }
  }
  for (let i = 0; i < array2.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array2[j] < array2[j + 1]) {
        let varTemp = array2[j];
        array2[j] = array2[j + 1];
        array2[j + 1] = varTemp;
      }
    }
  }
  let count = 0;
  for (let i = 0; i < matrix2.length; i++) {
    for (let j = 0; j < matrix2[i].length; j++) {
      matrix2[i][j] = array2[count];
      count++;
    }
  }
  console.log(matrix2);
}

fillMatrix();
