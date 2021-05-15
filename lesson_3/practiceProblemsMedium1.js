//Q1
str = "The Flintstones rock!";
for(let i = 0; i < 10; i++) {
  console.log(str.padStart(i + str.length, ' '));
}

//Q2
let munstersDescription = "The Munsters are creepy and spooky.";

console.log(inverseCaps(munstersDescription));

function inverseCaps(string) {
  let inversedString = '';
  for (let i = 0; i < string.length; i++) {
    let currentChar = string.charAt(i);
    if (currentChar === currentChar.toUpperCase()){
      inversedString += currentChar.toLowerCase();
    } else {
      inversedString += currentChar.toUpperCase();
    }
  }
  return inversedString;
}

//Q3
function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor >= 0); // changing !== to >= will prevent infinite loops and exceptions.
  return factors;
}
// here is a method that changes from a do/while loop.
// this also prevents the function from pushing any values from a negative divisor.
function factors2(number) {
  let divisor = number;
  let factors = [];
  while(0 <= divisor) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}
//bonus: number % divisor === 0 checks if dividing these two numbers with have a remainder.
//dividing by a factor would leave no remainder so it is checking if the number is a factor.

console.log(factors(-2)); //will push a 1
console.log(factors(-0));
console.log(factors(0));
console.log(factors(10));
console.log(factors(-10)); //will push a 1

console.log(factors2(-2)); //wont push any values
console.log(factors2(-0));
console.log(factors2(0));
console.log(factors2(10));
console.log(factors2(-10)); //wont push any values

//Q4
//the second method will not mutate the buffer argument passed to it. 
//.concat() returns a new array.

//Q5
//1: 0.9 (actual output: 0.8999999999999999 )
//2: false

//Q6
//fasle
//Number.isNaN()

//Q7
//34, the value of answer was never changed. It was passed by value.

//Q8
//the munsters object is passed by reference and is mutated by the function.

//Q9
//paper

//Q10
//no