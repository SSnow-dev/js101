const readline = require('readline-sync');

// I re-aranged the code a bit to work better in a loop, for convenience.
// added validation check for operation input.

//TODO add validation check for number input, 
//TODO change output message to also display which operation was performed (IE "The result of 5 plus 6 is: 11")

console.log("Welcome to Calculator!");
let operation;
let number1; 
let number2;
let output;

while (operation !== '5') {
  console.log("What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide 5) Exit");
  operation = readline.question();

  if (operation === '5') {
    console.log("Closing calculator");
    break;
  }

  // check if operation input is valid
  if (operation !== '1' && operation !== '2' && operation !== '3' && operation !== '4' && operation !== '5') {
    console.log("Sorry, that's not a valid choice.");
    continue;
  }

  console.log("What's the first number?");
  number1 = readline.question();
  
  console.log("What's the second number?");
  number2 = readline.question();
  
  number1 = Number(number1);
  number2 = Number(number2);
  
  output = undefined;
  
  if (operation === '1') {
    output = number1 + number2;
  } else if (operation === '2') {
    output = number1 - number2;
  } else if (operation === '3') {
    output = number1 * number2;
  } else if (operation === '4') {
    output = number1 / number2;
  } 
  
  if (output) {
    console.log(`The result is: ${output}`);
  }
}

