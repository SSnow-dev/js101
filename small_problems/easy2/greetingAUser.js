const readline = require('readline-sync');

console.log('What is your name?');
let name = readline.question();

if (isExclamation(name)) {
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}

function isExclamation(string) {
  if (string.charAt(string.length - 1) === '!') {
    return true;
  } else {
    return false;
  }
}