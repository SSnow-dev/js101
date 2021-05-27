const SAVED_RESULTS = {};
let fibCount = 0;
let fibRCount = 0;
console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765

console.log('=========[SPEED TEST]===========');
console.log('Testing for 35th fibonacci number.')
console.time('fibonacci');
console.log(fibonacci(35));      
console.timeEnd('fibonacci');
console.log('fibonacci with memoization call count:' + fibCount);
console.time('fibonacciR');
console.log(fibonacciR(35));      
console.timeEnd('fibonacciR');
console.log('fibonacci recursive only call count:' + fibRCount);

//recursive with memoization
function fibonacci(nth) {
  fibCount++;
  if (nth <= 2) {
    return 1;
  }
  if (SAVED_RESULTS[nth]) {
    return SAVED_RESULTS[nth];
  } else {
    SAVED_RESULTS[nth] = fibonacci(nth -1) + fibonacci(nth - 2);
    return SAVED_RESULTS[nth];
  }
}

//recursive only for speed comparrison
function fibonacciR(nth) {
  fibRCount++;
  if (nth <= 2) {
    return 1;
  }
  return fibonacciR(nth -1) + fibonacciR(nth - 2);
}