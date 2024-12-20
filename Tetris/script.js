let canvas = document.getElementById('canvas');
let context = null;

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
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
];

let square = [[1, 1], [1, 1]];
let rectangle = [[1, 1, 1, 1]];
let l = [[1], [1, 1, 1]];
let j = [[0, 0, 1], [1, 1, 1]];
let s = [[0, 1, 1], [1, 1]];
let z = [[1, 1], [0, 1, 1]];
let t = [[0, 1, 0], [1, 1, 1]];

let pieces = [square, rectangle, l, j, s, z, t];

let centralPosition = {
    x: 4,
    y: 0
};

let currentPiece = getRandomPiece();


function drawBoard() {
    context.clearRect(0, 0, canvas.width, canvas.heigth);
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
    context.strokeStyle = '#222';
    context.strokeRect(x * blockSize, y * blockSize, blockSize, blockSize);
}

function update() {
    drawBoard();
    drawPiece(currentPiece, centralPosition);
    requestAnimationFrame(update);
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

window.addEventListener("DOMContentLoaded", function () {
    canvas = document.getElementById('canvas');
    context = canvas.getContext("2d");
    update();
});