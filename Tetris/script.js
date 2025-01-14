let canvas = document.getElementById("canvas");
let canvasNextFigure = document.getElementById("canvasNextFigure");
let context = null;
let contextNextFigure = null;
let isGameOver = false;

//Configuración de tamaño del tablero
let rows = 20;
let columns = 10;
let blockSize = 30;

//Tablero
let board = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

let square = [
  [1, 1],
  [1, 1],
];
let rectangle = [[1, 1, 1, 1]];
let l = [
  [0, 0, 1],
  [1, 1, 1],
];
let j = [
  [1, 0, 0],
  [1, 1, 1],
];
let s = [
  [0, 1, 1],
  [1, 1, 0],
];
let z = [
  [1, 1, 0],
  [0, 1, 1],
];
let t = [
  [0, 1, 0],
  [1, 1, 1],
];

let pieces = [square, rectangle, l, j, s, z, t];

let centralPosition = {
  x: 4,
  y: 0,
};

let centralPositionNextFigure = {
  x: 1,
  y: 1,
};

let currentPiece = getRandomPiece();
let currentPiece2 = getRandomPiece();

let point = parseInt(document.getElementById("point").textContent);

function drawBoard() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < board.length; i++) {
    for (let y = 0; y < board[i].length; y++) {
      if (board[i][y] === 1) {
        drawBlock(y, i, "green");
      }
    }
  }
}

function drawBlock(x, y, color) {
  context.fillStyle = color;
  context.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
  context.strokeStyle = "#222";
  context.strokeRect(x * blockSize, y * blockSize, blockSize, blockSize);
}

function drawNextPiece(piece, position) {
  contextNextFigure.clearRect(
    0,
    0,
    canvasNextFigure.width,
    canvasNextFigure.height
  );
  for (let i = 0; i < piece.length; i++) {
    for (let y = 0; y < piece[i].length; y++) {
      if (piece[i][y] === 1) {
        drawBlockNextFigure(position.x + y, position.y + i, "red");
      }
    }
  }
}

function drawBlockNextFigure(x, y, color) {
  contextNextFigure.fillStyle = color;
  contextNextFigure.fillRect(
    x * blockSize,
    y * blockSize,
    blockSize,
    blockSize
  );
  contextNextFigure.strokeStyle = "#222";
  contextNextFigure.strokeRect(
    x * blockSize,
    y * blockSize,
    blockSize,
    blockSize
  );
}

function update() {
  if (isGameOver === false) {
    setTimeout(function () {
      movePiece(0, 1);
      drawBoard();
      drawPiece(currentPiece, centralPosition);
      drawNextPiece(currentPiece2, centralPositionNextFigure);
      requestAnimationFrame(update);
      whoIsTheRow();
      gameOver();
    }, 300);
  }
}

function getRandomPiece() {
  let index = Math.floor(Math.random() * pieces.length);
  return pieces[index];
}

function drawPiece(piece, position) {
  for (let i = 0; i < piece.length; i++) {
    for (let y = 0; y < piece[i].length; y++) {
      if (piece[i][y] === 1) {
        drawBlock(position.x + y, position.y + i, "red");
      }
    }
  }
}

function movePiece(x, y) {
  let previousPosition = {
    x: centralPosition.x,
    y: centralPosition.y,
  };
  centralPosition.x = centralPosition.x + x;
  centralPosition.y = centralPosition.y + y;
  let collidesValue = collides(currentPiece, centralPosition);
  if (collidesValue === true) {
    centralPosition = previousPosition;
    if (y > 0) {
      mergePiece();
      currentPiece = currentPiece2;
      currentPiece2 = getRandomPiece();
      centralPosition.x = 4;
      centralPosition.y = 0;
    }
  }
}

function mergePiece() {
  for (let i = 0; i < currentPiece.length; i++) {
    for (let y = 0; y < currentPiece[i].length; y++) {
      if (currentPiece[i][y] === 1) {
        if (board[centralPosition.y + i]) {
          board[centralPosition.y + i][centralPosition.x + y] = 1;
        }
      }
    }
  }
}

function collides(piece, position) {
  for (let i = 0; i < piece.length; i++) {
    for (let y = 0; y < piece[i].length; y++) {
      if (piece[i][y] === 1) {
        if (
          (board[position.y + i] &&
            board[position.y + i][position.x + y] !== 0) || // Validar si una posición esta vacia.
          position.x + y < 0 || // Valida la colición a la izquierda.
          position.y + i >= rows || // Valida la colición a la derecha.
          position.x + y >= columns // Valida la colición hacia abajo.
        ) {
          return true;
        }
      }
    }
  }
}

function rotatePiece() {
  let pieceR = [];
  let pX = currentPiece[0].length;
  let pY = currentPiece.length;
  for (let i = 0; i < pX; i++) {
    pieceR.push([]);
    for (let y = 0; y < pY; y++) {
      pieceR[i][y] = currentPiece[pY - y - 1][i];
    }
  }
  currentPiece = pieceR;
}

function whoIsTheRow() {
  for (let i = 0; i < board.length; i++) {
    let count = 0;
    for (let y = 0; y < board[i].length - 1; y++) {
      if (
        board[i][y] === board[i][y + 1] &&
        board[i][y] !== 0 &&
        board[i][y + 1] !== 0
      ) {
        count++;
      }
    }
    if (count === 9) {
      deleteRow(i);
      point = point + 1;
      document.getElementById("point").textContent = point;
      fallingPieces();
    }
  }
}

function deleteRow(x) {
  board[x][0] = 0;
  board[x][1] = 0;
  board[x][2] = 0;
  board[x][3] = 0;
  board[x][4] = 0;
  board[x][5] = 0;
  board[x][6] = 0;
  board[x][7] = 0;
  board[x][8] = 0;
  board[x][9] = 0;
}

function fallingPieces() {
  let count = false;
  for (let i = board.length - 1; i >= 0; i--) {
    for (let y = board[i].length - 1; y >= 0; y--) {
      if (board[i][y] === 1) {
        let varTemp = board[i + 1][y];
        board[i + 1][y] = board[i][y];
        board[i][y] = varTemp;
        count = true;
      }
    }
  }
  if (count === true) {
    setTimeout(fallingPieces, 50);
  }
}

function gameOver() {
  for (let i = 0; i < board.length; i++) {
    for (let y = 0; y < board[i].length; y++) {
      if (i === 0) {
        if (board[i][y] === 1) {
          let message = document.getElementById("gameOver").textContent;
          message = "GAME OVER";
          document.getElementById("gameOver").textContent = message;
          for (let x = 0; x < board.length; x++) {
            for (let a = 0; a < board[x].length; a++) {
              board[x][a] = 0;
            }
          }
          context.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
          );
          contextNextFigure.clearRect(
            0,
            0,
            canvasNextFigure.width,
            canvasNextFigure.height
          );
          isGameOver = true;
          let gameOverZone = document.getElementById("gameOverZone");
          let buttonRestart = document.createElement("button");
          buttonRestart.onclick = restartGame;
          buttonRestart.textContent = "Volver a jugar";
          buttonRestart.id = "buttonRestart";
          gameOverZone.appendChild(buttonRestart);
          document.getElementById("score").textContent = "Puntaje alcanzado: " + point;
        }
      }
    }
  }
}

function restartGame() {
  isGameOver = false;
  update();
  document.getElementById("gameOver").textContent = "";
  document.getElementById("score").textContent = "";
  document.getElementById("buttonRestart").remove();
  point = 0;
  document.getElementById("point").textContent = point;
}

window.addEventListener("keydown", function (e) {
  switch (e.key) {
    case "ArrowDown":
      movePiece(0, 1);
      break;
    case "ArrowLeft":
      movePiece(-1, 0);
      break;
    case "ArrowRight":
      movePiece(1, 0);
      break;
    case " ":
      rotatePiece();
      break;
  }
});

window.addEventListener("DOMContentLoaded", function () {
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");
  contextNextFigure = canvasNextFigure.getContext("2d");
  update();
});
