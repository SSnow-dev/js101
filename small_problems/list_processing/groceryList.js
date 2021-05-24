console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

function buyFruit(twoDArray) {
  let oneDArray = [];
  twoDArray.forEach(fruit => {
    for (let i = 0; i < fruit[1]; i++) {
      oneDArray.push(fruit[0]);
    }
  });
  return oneDArray;
}