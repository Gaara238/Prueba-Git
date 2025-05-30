let word1 = prompt('¿Cual es la palabra a revisar si es palindroma o no?');

function checkWord() {
    let word2 = "";
    for (let i = word1.length - 1; i >= 0; i--) {
        word2 = word2 + word1[i];
    }
    if (word1 === word2) {
        alert('La palabra si es palindroma');
    } else {
         alert('La palabra no es palindroma');
    }
}

checkWord();