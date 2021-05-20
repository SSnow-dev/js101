const readline = require('readline-sync');


let age = Number(readline.question(prompt('What is your age?')));
let retireAge = Number(readline.question(prompt('At what age would you like to retire?')));
let yearsToRetire = retireAge - age;
let currentYear = new Date().getFullYear();

console.log(`It's ${currentYear}. You will retire in ${currentYear + yearsToRetire}.`);
console.log(`You have only ${yearsToRetire} of work to go!`);

function prompt(string) {
  console.log(`==> ${string}`);
}