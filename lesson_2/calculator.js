const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json')

//TODO change output message to also display which operation was performed
//(IE "The result of 5 plus 6 is: 11")
let language;
prompt("Please choose a language: 1) English 2) Japanese.")
let languageChoice = readline.question();

switch (languageChoice) {
  case '1':
    language = 'en';
    break;
  case '2':
    language = 'jp';
    break;
}

console.log(MESSAGES[language]['welcome']);
let operation;
let number1;
let number2;
let output;

while (operation !== '5') {
  prompt(MESSAGES[language]['choose_operation']);
  operation = readline.question();

  if (operation === '5') {
    notice(MESSAGES[language]['closing']);
    break;
  }

  // check if operation input is valid
  if (!['1','2','3','4','5'].includes(operation)) {
    notice(MESSAGES[language]['invalid_choice']);
    continue;
  }

  prompt(MESSAGES[language]['first_number']);
  number1 = readline.question();

  while (invalidNumber(number1)) {
    notice(MESSAGES[language]['invalid_number']);
    prompt(MESSAGES[language]['first_number']);
    number1 = readline.question();
  }

  prompt(MESSAGES[language]['second_number']);
  number2 = readline.question();

  while (invalidNumber(number2)) {
    notice(MESSAGES[language]['invalid_number']);
    prompt(MESSAGES[language]['second_number']);
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
    console.log(`${MESSAGES[language]['result']} ${output}`);
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