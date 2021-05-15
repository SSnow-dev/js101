//Q1
DisplayMessage('Question 1');

//method 1
DisplayMessage('method 1');
let numbers = [1, 2, 3, 4];
console.log(numbers);
numbers.length = 0;
console.log(numbers);

//method 2
DisplayMessage('method 2');
numbers = [1, 2, 3, 4];
console.log(numbers);
numbers = [];
console.log(numbers);

//method 3
DisplayMessage('method 3');
numbers = [1, 2, 3, 4];
console.log(numbers);
while(numbers.length > 0) {
  numbers.pop();
}
console.log(numbers);

//mthod 4 (extra)
//numbers.splice(0, numbers.length);

//Q2
//1,2,34,5

//Q3
//"hello there"

//Q4
// { first: 42 }, { second: "value2" }, 3, 4, 5

//Q5
//method 1
function isColorValid(color) {
  return (color === "blue" || color === "green");
}
//method 2
//const isColorValid = color => ["blue", "green"].includes(color);

function DisplayMessage(string) {
  console.log(`==========[${string}]==========`);
}