let usuary = "";

let computer = "";

let victory = 0;

let tie = 0;

let lose = 0;

let exit = false;

while (exit === false) {
    let p = prompt("¡Bienvenido al juego de Piedra, Papel o Tijera!\nElige tu jugada (escribe 'piedra', 'papel', 'tijera' o 'salir' para terminar)");

    if (p === "salir") {
        exit = true;
    } else {
        usuary = p;
        computerMove();
        whoIsTheWinner();
    }
}

function computerMove() {
    let randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber === 0) {
        computer = "piedra";
    }

    if (randomNumber === 1) {
        computer = "papel";
    }

    if (randomNumber === 2) {
        computer = "tijera";
    }
}
function whoIsTheWinner() {
    if (computer === "piedra" && usuary === "tijera") {
        alert("La computadora eligió: " + computer + "\n¡Perdiste esta ronda!");
        lose++;
    }

    if (computer === "tijera" && usuary === "papel") {
        alert("La computadora eligió: " + computer + "\n¡Perdiste esta ronda!");
        lose++;
    }

    if (computer === "papel" && usuary === "piedra") {
        alert("La computadora eligió: " + computer + "\n¡Perdiste esta ronda!");
        lose++;
    }

    if (usuary === "piedra" && computer === "tijera") {
        alert("La computadora eligió: " + computer + "\n¡Ganaste esta ronda!");
        victory++;
    }

    if (usuary === "tijera" && computer === "papel") {
        alert("La computadora eligió: " + computer + "\n¡Ganaste esta ronda!");
        victory++;
    }
    
    if (usuary === "papel" && computer === "piedra") {
        alert("La computadora eligió: " + computer + "\n¡Ganaste esta ronda!");
        victory++;
    }

    if (usuary === "piedra" && computer === "piedra") {
        alert("La computadora eligió: " + computer + "\n¡Es un empate!");
        tie++;
    }

    if (usuary === "papel" && computer === "papel") {
        alert("La computadora eligió: " + computer + "\n¡Es un empate!");
        tie++;
    }

    if (usuary === "tijera" && computer === "tijera") {
        alert("La computadora eligió: " + computer + "\n¡Es un empate!");
        tie++;
    }
    
    alert("Resultados:\nVictorias: " + victory + " | Empates: " + tie + " | Derrotas: " + lose);
}