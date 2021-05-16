const readline = require('readline-sync');

console.log('Please enter an integer greater than 0: ');
let int = readline.question();
console.log('Enter "s" to compute the sum, or "p" to compute the product.');
let choice = readline.question();

if (choice === 's') {
  let sum = findSum(int);
  console.log(`The sum of the intergers between 1 and ${int} is ${sum}`);
} else if (choice === 'p') {
  let product = findProduct(int);
  console.log(`The product of the intergers between 1 and ${int} is ${product}`);
} else {
  console.log('That\'s not a valid choice.');
}


function findSum(num) {
  let total = 0;
  for(let i = 1; i <= num; i++) {
    total += i;
  }
  return total;
}

function findProduct(num) {
  let total = 1;
  for(let i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
}
