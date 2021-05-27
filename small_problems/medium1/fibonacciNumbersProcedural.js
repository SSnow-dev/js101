console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050

// //saves all fib numbers to an array and returns nth number
// function fibonacci(nth) {
//   const OFFSET = 1;
//   let fib = [1,1];
//   let sum = 1;
//   for (let i = 1; i < nth - OFFSET; i++) {
//     fib.push(sum += fib[i - OFFSET]);
//   }
//   return fib[nth - OFFSET];
// }

//only returns nth number
function fibonacci(nth) {
  let fib1 = 0;
  let fib2 = 1;
  let final = 0;
  if (nth <= 2) {
    return 1;
  }
  else {
    for (let i = 0; i < nth -1; i++) {
     final = fib1 + fib2;
     fib1 = fib2;
     fib2 = final;
    }
  }
  return final;
}