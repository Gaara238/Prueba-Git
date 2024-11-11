let Triki = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

function saveFigure() {
    let figure = document.getElementById("figure").value;
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    if (x >= 0 && x <= 2) {
        if (y >= 0 && y <= 2) {
            Triki[x][y] = figure;
        } else {
            alert("Los caracteres insertados no coinciden con ninguna posicion de la tabla del triki, intente poner unos que si coincidan");
        }
    } else {
        alert("Los caracteres insertados no coinciden con ninguna posicion de la tabla del triki, intente poner unos que si coincidan");
    }
}