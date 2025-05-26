class typeNumbers {
    constructor(pair, inpair) {
        this.pair = pair;
        this.inpair = inpair;
    }
}

let numbers = [];

function fillArray() {
    for (let i = 0; i <= 9; i++) {
        let number = randomNumber();
        numbers.push(number);
    }
    console.log(numbers);
}

function randomNumber() {
    let number = Math.floor(Math.random() * 100);
    return number;
}

function pairOrInpair() {
    let pair = 0;
    let inpair = 0;
    for (let i = 0; i < numbers.length; i++) {
        let operation = numbers[i] % 2;
        if (operation === 0) {
            pair++;
        } else {
            inpair++;
        }
    }
    let finallyProduct = new typeNumbers(pair, inpair);
    console.log(finallyProduct);
}

fillArray();
pairOrInpair();