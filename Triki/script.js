let Triki = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

let figureValue = null;

function dontRepeateFigure(figure) {
    if (figureValue === figure) {
        if (figure === "X" || figure === "x") {
            let f1 = "O";
            alert("Es el turno de la figura " + f1);
        } else if (figure === "O" || figure === "o") {
            f1 = "X";
            alert("Es el turno de la figura " + f1);
        }
    }
}

function saveFigure() {
    let figure = document.getElementById("figure").value;
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    if (figure === "X" || figure === "O" || figure === "o" || figure === "x") {
        if (x >= 0 && x <= 2) {
            if (y >= 0 && y <= 2) {
                if (figure !== figureValue) {
                    Triki[x][y] = figure;
                    figureValue = figure;
                } else {
                    dontRepeateFigure(figure);
                }

            } else {
                alert("Los numeros insertados no coinciden con ninguna posicion de la tabla del triki, intente poner unos que si coincidan");
            }
        } else {
            alert("Los numeros insertados no coinciden con ninguna posicion de la tabla del triki, intente poner unos que si coincidan");
        }
    } else {
        alert("La figura insertada no es X o O intente con una de estas figuras");
    }
    console.log(Triki);
    trikiHorizontal();
    trikiVertical();
    trikiDiagonal();
}

function trikiHorizontal() {
    let count = 0;
    for (let i = 0; i < Triki.length; i++) {
        for (let j = 0; j < Triki.length - i - 1; j++) {
            if (Triki[i][j] === Triki[i][j + 1] && Triki[i][j] !== null && Triki[i][j + 1] !== null) {
                count++;
            }
        }
    }
    if (count === 2) {
        document.getElementById("message").textContent = "HAY UN GANADOR";
    }
}

function trikiVertical() {
    let count = 0;
    for (let i = 0; i < Triki.length; i++) {
        for (let j = 0; j < Triki.length - i - 1; j++) {
            if (Triki[j][i] === Triki[j + 1][i] && Triki[j][i] !== null && Triki[j + 1][i] !== null) {
                count++;
                console.log(Triki);
                if (count === 2) {
                    document.getElementById("message").textContent = "HAY UN GANADOR";
                    break;
                }

            }
        }
    }
}

function trikiDiagonal() {
    if (Triki[0][0] === Triki[1][1] && Triki[1][1] === Triki[2][2] && Triki[0][0] !== null && Triki[1][1] !== null && Triki[2][2] !== null) {
        document.getElementById("message").textContent = "HAY UN GANADOR";
    }

    if (Triki[2][0] === Triki[2][0] && Triki[1][1] === Triki[0][2] && Triki[2][0] !== null && Triki[1][1] !== null && Triki[0][2] !== null) {
        document.getElementById("message").textContent = "HAY UN GANADOR";
    }
}

function trikiTie() {
    for (let i = 0; i < Triki.length; i++) {
        for (let j = 0; j < Triki.length - i - 1; j++) {

        }
    }
}