
console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765

// function fibonacci(nth) {
//   function count(num, index) {
//     if (index <= 1) {
//       return num;
//     }
//     return count(0, index -1) + count(1, index -2);
//   }
//   return count(1 ,nth);
// }

//refactor
function fibonacci(nth) {
  if (nth <= 2) {
    return 1;
  }
  return fibonacci(nth -1) + fibonacci(nth - 2);
}
