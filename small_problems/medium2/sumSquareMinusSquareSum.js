console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150


function sumSquareDifference(num) {
  return squareOfSum(num) - sumOfSquare(num);
}

function squareOfSum(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum**2;
}

function sumOfSquare(num) {
  let total = 0;
  for (let i = 0; i <= num; i++) {
    total += i**2;
  }
  return total;
}