const readline = require('readline-sync');

//TODO change output message to also display which operation was performed
//(IE "The result of 5 plus 6 is: 11")

console.log("Welcome to Calculator!");
let operation;
let number1;
let number2;
let output;

while (operation !== '5') {
  prompt("What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide 5) Exit");
  operation = readline.question();

  if (operation === '5') {
    notice("Closing calculator");
    break;
  }

  // check if operation input is valid
  if (!['1','2','3','4','5'].includes(operation)) {
    notice("Sorry, that's not a valid choice.");
    continue;
  }

  prompt("What's the first number?");
  number1 = readline.question();

  while (invalidNumber(number1)) {
    notice("Sorry, that's not a valid number.");
    prompt("What's the first number?");
    number1 = readline.question();
  }

  prompt("What's the second number?");
  number2 = readline.question();

  while (invalidNumber(number2)) {
    notice("Sorry, that's not a valid number.");
    prompt("What's the second number?");
    number2 = readline.question();
  }

  //change input strings to numbers
  number1 = Number(number1);
  number2 = Number(number2);

  output = undefined;

  switch (operation) {
    case '1':
      output = number1 + number2;
      break;
    case '2':
      output = number1 - number2;
      break;
    case '3':
      output = number1 * number2;
      break;
    case '4':
      output = number1 / number2;
      break;
  }

  if (output) {
    console.log(`The result is: ${output}`);
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function notice(message) {
  console.log(`-----${message}-----`);
}

function invalidNumber(input) {
  return input.trimStart() === '' || Number.isNaN(Number(input));
}