let Triki = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

function saveFigure() {
    let figure = document.getElementById("figure").value;
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    if (figure === "X" || figure === "O" || figure === "o" || figure === "x") {
        if (x >= 0 && x <= 2) {
            if (y >= 0 && y <= 2) {
                Triki[x][y] = figure;
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

function trikiTie() {
    for (let i = 0; i < Triki.length; i++) {
        for (let j = 0; j < Triki.length - i - 1; j++) {

        }
    }
}