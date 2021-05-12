const readLineSync = require('readline-sync');

message("Tip Calculator!");

prompt("How much is the bill?");
let bill = readLineSync.prompt();
bill = parseFloat(bill);

prompt("What is the tip percentage?");
let tipPercent = readLineSync.prompt();
tipPercent = parseFloat(tipPercent);

let tipAmount = bill * (tipPercent / 100);
let totalBill = bill + tipAmount;

// Round values to real dollar ammount. (two decimal places).
tipAmount = Math.round(tipAmount * 100) / 100;
totalBill = Math.round(totalBill * 100) / 100;

message("Tip amount is: $" + tipAmount);
message("Total bill is: $" + totalBill);

function message(string) {
  console.log('[' + string + ']');
}

function prompt(string) {
  console.log('===> ' + string);
}