let array1 = [];
let array2 = [];
let array3 = [];

function randomNumber() {
  return Math.floor(Math.random() * 100);
}

for (let i = 0; i < 10; i++) {
  array1.push(randomNumber());  
  array2.push(randomNumber());
  //Como ya se creo la posición en ambos arreglos ahora si podemos acceder a ellas  
  array3.push(array1[i] + array2[i]);
}

console.log(array1);
console.log(array2);
console.log(array3);
