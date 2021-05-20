const readline = require('readline-sync');

let numArray = [];
let lastNumber;

handleInput();
printIsNumberInArray(numArray, lastNumber);

function isNumberInArray(array, number) {
  let result = false;
  array.forEach(num => {
    if (num === number) {
      result = true;
    }
  });
  return result;
}

function printIsNumberInArray(array, number) {
  if (isNumberInArray(array, number)) {
    console.log(`The number ${number} appears in ${numArray.join()}.`);
  } 
  else {
    console.log(`The number ${number} does not appear in ${numArray.join()}.`);
  }
}

function prompt(string) {
  console.log(`==> ${string}`);
}

function handleInput () {
  prompt('Enter the 1st number: ');
  numArray.push(Number(readline.prompt()));
  prompt('Enter the 2nd number: ');
  numArray.push(Number(readline.prompt()));
  prompt('Enter the 3rd number: ');
  numArray.push(Number(readline.prompt()));
  prompt('Enter the 4th number: ');
  numArray.push(Number(readline.prompt()));
  prompt('Enter the 5th number: ');
  numArray.push(Number(readline.prompt()));
  prompt('Enter the last number: ');
  lastNumber = Number(readline.prompt());
}