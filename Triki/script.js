let Triki = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

let p1 = {
    i: null,
    j: null
}

let p2 = {
    i: null,
    j: null
}

let p3 = {
    i: null,
    j: null
}

Triki = JSON.parse(localStorage.getItem("Triki"));

let figureValue = null;
figureValue = localStorage.getItem("figureValue");

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
                if (Triki[x][y] === null) {
                    if (figure !== figureValue) {
                        Triki[x][y] = figure;
                        loadTable();
                        figureValue = figure;
                        localStorage.setItem("figureValue", figureValue);
                    } else {
                        dontRepeateFigure(figure);
                    }
                } else {
                    alert("Ya hay una figura en esta posición, intenta con otra");
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
    trikiTie();
    localStorage.setItem("Triki", JSON.stringify(Triki));
}

function buttonUpdate() {
    document.getElementById("figure").value = "";
    document.getElementById("x").value = "";
    document.getElementById("y").value = "";
    document.getElementById("message").textContent = "";
    Triki = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
    console.log(Triki);
    localStorage.setItem("Triki", JSON.stringify(Triki));
    figureValue = null;
    localStorage.setItem("figureValue", figureValue);
}

function trikiHorizontal() {
    for (let i = 0; i < Triki.length; i++) {
        let count = 0;
        for (let j = 0; j < Triki.length - i - 1; j++) {
            if (Triki[i][j] === Triki[i][j + 1] && Triki[i][j] !== null && Triki[i][j + 1] !== null) {
                count++;
                if (count === 1) {
                    p1.i = i;
                    p1.j = j;
                }
                if (count === 2) {
                    p2.i = i;
                    p2.j = j;
                    p3.i = i;
                    p3.j = j + 1;
                }
            }
        }
        if (count === 2) {
            document.getElementById("message").textContent = "EL JUGADOR " + figureValue + " A GANADO";
            outlineGreenPosition();
            break;
        }
    }
}

function trikiVertical() {
    for (let i = 0; i < Triki.length; i++) {
        let count = 0;
        for (let j = 0; j < Triki.length - i - 1; j++) {
            if (Triki[j][i] === Triki[j + 1][i] && Triki[j][i] !== null && Triki[j + 1][i] !== null) {
                count++;
                if (count === 1) {
                    p1.i = j;
                    p1.j = i;
                }
                if (count === 2) {
                    p2.i = j;
                    p2.j = i;
                    p3.i = j;
                    p3.j = i + 1;
                }
            }
        }
        if (count === 2) {
            document.getElementById("message").textContent = "EL JUGADOR " + figureValue + " A GANADO";
            outlineGreenPosition();
            break;
        }
    }
}

function trikiDiagonal() {
    if (Triki[0][0] === Triki[1][1] && Triki[1][1] === Triki[2][2] && Triki[0][0] !== null && Triki[1][1] !== null && Triki[2][2] !== null) {
        p1.i = 0;
        p1.j = 0;
        p2.i = 1;
        p2.j = 1;
        p3.i = 2;
        p3.j = 2;
        document.getElementById("message").textContent = "EL JUGADOR  " + figureValue + "  A GANADO";
        outlineGreenPosition();
    }

    if (Triki[2][0] === Triki[1][1] && Triki[1][1] === Triki[0][2] && Triki[2][0] !== null && Triki[1][1] !== null && Triki[0][2] !== null) {
        p1.i = 2;
        p1.j = 0;
        p2.i = 1;
        p2.j = 1;
        p3.i = 0;
        p3.j = 2;
        document.getElementById("message").textContent = "EL JUGADOR  " + figureValue + "  A GANADO";
        outlineGreenPosition();
    }
}

function trikiTie() {
    let count = 0;
    for (let i = 0; i < Triki.length; i++) {
        for (let j = 0; j < Triki.length; j++) {
            if (Triki[i][j] !== null) {
                count++;
            }
            if (count === 9) {
                document.getElementById("message").textContent = "ESTA PARTIDA A TERMINADO EN UN EMPATE";
            }
        }
    }
}

function loadTable() {
    let table = document.getElementById("table");
    for (let i = 0; i < table.rows.length; i++) {
        for (let j = 0; j < table.rows[i].cells.length; j++) {
            table.rows[i].cells[j].textContent = Triki[i][j];
        }
    }
}

function outlineGreenPosition() {
    let table = document.getElementById("table");
    table.rows[p1.i].cells[p1.j].classList.add("outlineGreen");
    table.rows[p2.i].cells[p2.j].classList.add("outlineGreen");
    table.rows[p3.i].cells[p3.j].classList.add("outlineGreen");
}