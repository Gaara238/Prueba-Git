function moreRepeat(numbers) {
  let mRepeat = -1;
  let mCount = 0;
  let equals = [];
  for (let i = 0; i < numbers.length; i++) {
    let count = 0;
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] === numbers[j]) {
        count++;
      }
    }
    if (count === mCount) {
      let exist = false;
      for (let k = 0; k < equals.length; k++) {
        if (numbers[i] === equals[k]) {
          exist = false;
        } else {
          exist = true;
        }
      }
      if (exist) {
        equals.push(numbers[i]);
      }
    }
    if (count > mCount) {
      mRepeat = numbers[i]; 
      mCount = count;
      equals.push(numbers[i]);
    }
  }
  alert(
    "El número más repetido es: " +
      mRepeat +
      " con un total de " +
      mCount +
      " veces repetido"
  );
  console.log(equals);
}

moreRepeat([7, 7, 4, 8, 8, 1, 2]);
