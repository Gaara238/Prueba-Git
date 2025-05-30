let numbers = [7, 5, 7, 3, 1, 3];
let newNumbers = [];

function deleteNumbers() {
    for (let i = 0; i < numbers.length; i++) {
        let count = 0;
        for (let j = 0; j < newNumbers.length; j++) {
            if (numbers[i] === newNumbers[j]) {
                break;
            } else {
                count++;
            }
        }
        if (count === newNumbers.length) {
            newNumbers.push(numbers[i]);
        }
    }
}

function organizeNumbers() {
    for (let i = 0; i < newNumbers.length; i++) {
        for (let j = 0; j < newNumbers.length; j++) {
            if (newNumbers[j] > newNumbers[j + 1]) {
                let varTemp = newNumbers[j];
                newNumbers[j] = newNumbers[j + 1];
                newNumbers[j + 1] = varTemp;
            }
        }
    }
}

function print() {
    console.log(numbers);
    console.log(newNumbers);
}

deleteNumbers();
organizeNumbers();
print();