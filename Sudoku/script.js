let board = [
  [2, 1, 8, 4, 9, 5, 3, 6, 7],
  [5, 4, 7, 6, 8, 3, 9, 1, 2],
  [9, 6, 3, 1, 2, 7, 8, 5, 4],
  [6, 3, 2, 8, 7, 4, 5, 9, 1],
  [4, 5, 9, 3, 6, 1, 7, 2, 8],
  [8, 7, 1, 9, 5, 2, 6, 4, 3],
  [1, 9, 4, 5, 3, 8, 2, 7, 6],
  [7, 8, 5, 2, 1, 6, 4, 3, 9],
  [3, 2, 6, 7, 4, 9, 1, 8, 5],
];

let diagonalPositionsLeftToRigth = [];
let diagonalPositionsRigthToLeft = [];

function printInDiagonalLeftToRigth() {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (i === j) {
        diagonalPositionsLeftToRigth.push(board[i][j]);
      }
    }
  }
  console.log(diagonalPositionsLeftToRigth);
}

function printInDiagonalRigthToLeft() {
  let antNumber = 8;
  for (let i = 0; i <= 8; i++) {
    for (let j = antNumber; j >= 0; j--) {
      antNumber = j - 1;
      diagonalPositionsRigthToLeft.push(board[i][j]);
      break;
    }
  }
  console.log(diagonalPositionsRigthToLeft);
}

function printAL() {
  for (let i = 0; i <= 8; i++) {
    console.log(board[i][0]);
    if (i === 8) {
      for (let j = 1; j <= 8; j++) {
        console.log(board[8][j]);
      }
    }
  }
}

function choosePosition() {
  let number = null;
  let valid = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      number = searchPosition(board[i][j], i, j);
      if (number) {
        valid++;
      } else {
        alert("El sudoku esta mal realizado");
        return;
      }
    }
  }
  if (valid === 81) {
    alert("Felicitaciones, el sudoku esta bien realizado");
  }
}

function searchPosition(number, x, y) {
  let invalid = 0;
  for (let i = 0; i <= 8; i++) {
    if (number === board[x][i]) {
      invalid++;
    }
  }
  for (let j = 0; j <= 8; j++) {
    if (number === board[j][y]) {
      invalid++;
    }
  }
  if (invalid > 2) {
    return false;
  } else {
    return true;
  }
}

choosePosition();
printInDiagonalLeftToRigth();
printInDiagonalRigthToLeft();
printAL();