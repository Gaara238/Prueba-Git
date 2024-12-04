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

let figure = localStorage.getItem("figure");

let figureWin = null;

let figureTurn = localStorage.getItem("figureTurn");

let securityFigure = localStorage.getItem("securityFigure");

Triki = JSON.parse(localStorage.getItem("Triki"));

function saveFigure(x, y) {
    if (Triki[x][y] === null) {
        if (figure !== securityFigure) {
            Triki[x][y] = figure;
            securityFigure = figure;
            localStorage.setItem("securityFigure", securityFigure);
            figureWin = figure;
            if (figure === "X") {
                figureTurn = "O";
                localStorage.setItem("figureTurn", figureTurn);
            } else if (figure === "O") {
                figureTurn = "X";
                localStorage.setItem("figureTurn", figureTurn);
            }
                loadTable();
            if (figure === "X") {
                figure = "O";
                localStorage.setItem("figure", figure);
            } else if (figure === "O") {
                figure = "X";
                localStorage.setItem("figure", figure);
            }
        }
    } else {
        alert("Ya hay una figura en esta posición, intenta con otra");
    }
    console.log(Triki);
    trikiHorizontal();
    trikiVertical();
    trikiDiagonal();
    trikiTie();
    localStorage.setItem("Triki", JSON.stringify(Triki));
}

function buttonUpdate() {
    document.getElementById("message").textContent = "";
    Triki = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
    console.log(Triki);
    localStorage.setItem("Triki", JSON.stringify(Triki));
    figure = "X";
    figureTurn = "X";
    securityFigure = null;
    localStorage.setItem("securityFigure", securityFigure);
    loadTable();
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
            document.getElementById("message").textContent = "EL JUGADOR " + figureWin + " A GANADO";
            outlineGreenPosition();
            break;
        }
    }
}

function trikiVertical() {
    for (let i = 0; i < Triki.length; i++) {
        let count = 0;
        for (let j = 0; j < Triki.length - 1; j++) {
            if (Triki[j][i] === Triki[j + 1][i] && Triki[j][i] !== null && Triki[j + 1][i] !== null) {
                count++;
                if (count === 1) {
                    p1.i = j;
                    p1.j = i;
                }
                if (count === 2) {
                    p2.i = j;
                    p2.j = i;
                    p3.i = j + 1;
                    p3.j = i;
                }
            }
        }
        if (count === 2) {
            document.getElementById("message").textContent = "EL JUGADOR " + figureWin + " A GANADO";
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
        document.getElementById("message").textContent = "EL JUGADOR  " + figureWin + "  A GANADO";
        outlineGreenPosition();
    }

    if (Triki[2][0] === Triki[1][1] && Triki[1][1] === Triki[0][2] && Triki[2][0] !== null && Triki[1][1] !== null && Triki[0][2] !== null) {
        p1.i = 2;
        p1.j = 0;
        p2.i = 1;
        p2.j = 1;
        p3.i = 0;
        p3.j = 2;
        document.getElementById("message").textContent = "EL JUGADOR  " + figureWin + "  A GANADO";
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
    let player = document.getElementById("player");
    player.textContent = figureTurn;
    while (table.rows.length) {
        table.deleteRow(0);
    }
    for (let i = 0; i < Triki.length; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < Triki.length; j++) {
            let td = document.createElement("td");
            td.textContent = Triki[i][j];
            td.dataset.x = i;
            td.dataset.y = j;
            td.addEventListener('click', clickCell);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

function outlineGreenPosition() {
    let table = document.getElementById("table");               
    table.rows[p1.i].cells[p1.j].classList.add("outlineGreen");
    table.rows[p2.i].cells[p2.j].classList.add("outlineGreen");
    table.rows[p3.i].cells[p3.j].classList.add("outlineGreen");
}

function clickCell(e) {
    let messageHTML = document.getElementById("message").textContent;
    if (messageHTML === "") {
        saveFigure(e.target.dataset.x, e.target.dataset.y);
    }
}

window.addEventListener("load", function () {
    loadTable();
    trikiVertical();
    trikiHorizontal();
    trikiDiagonal();
    trikiTie();
});