function generateMultiplicationTable() {
    let number = prompt("¿Cual es el número a sacar la tabla de multiplicar?");
    let alertTemp = "";
    for (let i = 1; i <= 10; i++) {
        alertTemp = alertTemp + "\n" + number + "x" + i + " = " + number * i;
    }
    alert("Tabla de multiplicar del número " + number + ":\n" + alertTemp);
}

generateMultiplicationTable();