const readline = require('readline-sync');

prompt('Enter a noun: ');
let noun = readline.prompt();
prompt('Enter a verb: ');
let verb = readline.prompt();
prompt('Enter a adjective: ');
let adjective = readline.prompt();
prompt('Enter a adverb: ');
let adverb = readline.prompt();

printMadlib();

function printMadlib() {
  console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
  console.log(`The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.`);
  console.log(`The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`);
}

function prompt(string) {
  console.log(`==> ${string}`);
}