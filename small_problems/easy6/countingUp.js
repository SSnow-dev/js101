console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]

function sequence(posInt) {
  countArray = [];

  for (let i = 1; i <= posInt; i++) {
    countArray.push(i);
  }
  return countArray;
}