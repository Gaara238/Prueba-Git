let number = parseInt(
  prompt("¿Cual es el numero al que se le va a realizar la prueva?")
);

function numbers() {
  for (let i = 1; i <= number; i++) {
    fizzbuzz(i);
  }
}

function fizzbuzz(numberPar) {
  let operation1 = numberPar % 3;
  let operation2 = numberPar % 5;
  if (operation1 === 0 && operation2 === 0) {
    console.log("fizzbuzz");
  } else if (operation1 === 0) {
    console.log("fizz");
  } else if (operation2 === 0) {
    console.log("buzz");
  }
  if (operation1 !== 0 && operation2 !== 0) {
    console.log(numberPar);
  }
}

numbers();
