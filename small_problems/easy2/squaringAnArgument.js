const square = (num) => multiply(num,num);
const multiply = (num1, num2) => num1 * num2;


console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true
console.log(square(4));

// function square(num) {
//   return multiply(num,num);
// }
