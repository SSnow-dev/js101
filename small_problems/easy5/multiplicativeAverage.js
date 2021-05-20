console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"

function multiplicativeAverage(intArray) {
  let product = 1;
  intArray.forEach(int => {
    product *= int;
  });
  return (product / intArray.length).toFixed(3);
}