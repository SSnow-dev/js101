console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]

function halvsies(array) {
  let halvsiesArray = [];
  let firstHalfIndex = Math.ceil(array.length / 2);
  let firstHalfArray = [];
  let secondHalfArray = [];

  for (let i = 0; i < firstHalfIndex; i++) {
    firstHalfArray.push(array[i]);
  }
  for (let i = firstHalfIndex; i < array.length; i++) {
    secondHalfArray.push(array[i]);
  }
  halvsiesArray.push(firstHalfArray,secondHalfArray);
  return halvsiesArray;
}