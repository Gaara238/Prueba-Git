function playHanged(secretWord, guessedLetters) {
  let message = '';
  for (let i = 0; i < secretWord.length; i++) {
      for (let j = 0; j < guessedLetters.length; j++) {
          if (secretWord[i] === guessedLetters[j]) {
              message = message + '  ' + guessedLetters[j];
          }
          else {
            message = message + ' _ ';
          }
      }
  }
  console.log(message);
}

playHanged("aguapanela", ["u", "a", "p", "n", "l"]);
