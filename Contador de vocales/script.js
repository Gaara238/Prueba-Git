function countVocals() {
  let count = 0;
  let text = document.getElementById("text").value;
  text = text.toLowerCase();
  for (let i = 0; i < text.length; i++) {
    switch (text[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        count++;
        break;
      default:
        break;
    }
  }
  alert("¡Tu palabra tiene " + count + " vocales!");
}
