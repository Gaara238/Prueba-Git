let Triki = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

function saveFigure() {
    let figure = document.getElementById("figure").value;
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    Triki[x][y] = figure;
    console.log(Triki);
    
}