let number = parseInt(
  prompt("¿A que número se le va a realizar la escala numerica?")
);

let scale = "";

function numberScale() {
  for (let i = 1; i <= number; i++) {
    scale = scale + " " + i;
    console.log(scale);
  }
}

numberScale();
