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
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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

function movePiece(x, y) {
    centralPosition.x = centralPosition.x + x;
    centralPosition.y = centralPosition.y + y;
    let collidesValue = collides(currentPiece, centralPosition);
    if (collidesValue === true) {
        console.log("Colición exitosa");

    }
}

function collides(piece, position) {
    for (let i = 0; i < piece.length; i++) {
        for (let y = 0; y < piece[i].length; y++) {
            if (piece[i][y] === 1) {
                if (board[position.x][position.y]
                    && (board[position.x + i][position.y + y] !== 0
                        || position.x + i < 0
                        || position.y + y >= rows
                        || position.x + i >= columns)) {
                    return true;
                }
            }
        }
    }
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
    }
})

window.addEventListener("DOMContentLoaded", function () {
    canvas = document.getElementById('canvas');
    context = canvas.getContext("2d");
    update();
});