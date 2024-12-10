function makeRandomNumber() {
    return Math.floor(Math.random() * 100);
}

let number = makeRandomNumber();

let count = 1;

let exit = "salir";

let p1 = null;

while (p1 !== number) {
    p1 = parseInt(prompt("¡Adivina el número del 0 al 100!"));
    if (p1 === number) {
        alert("Felicidades adivinaste el numero en " + count + " intentos");
        let p2 = null;
        while (p2 !== exit) {
            p2 = prompt("Adivina la palabra secreta para salir del juego");
            if (p2 === exit) {
                break;
            }

            if (p2 !== exit) {
                alert("Esa no es la palabra secreta,vuelve a intentar");
            }
        }
    }

    if (p1 > number) {
        alert("El numero secreto es menor al que acabaste de ingresar");
        count++;
    }

    if (p1 < number) {
        alert("El numero secreto es mayor al que acabaste de ingresar");
        count++;
    }
}
