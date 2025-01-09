let array1 = [];
let array2 = [];
let array3 = [];
let numberRandom = null;

function randomNumber() {
  numberRandom = Math.floor(Math.random() * 100);
}

for (let i = 0; i < 10; i++) {
    randomNumber();
  array1[i] = numberRandom;
}

for (let i = 0; i < 10; i++) {
    randomNumber();
  array2[i] = numberRandom;
}

for (let i = 0; i < 10; i++) {
  array3[i] = array1[i] + array2[i];
}

console.log(array1);
console.log(array2);
console.log(array3);

