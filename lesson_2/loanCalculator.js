//==============Init===============================
const readline = require('readline-sync');

let monthlyPayment = 0;
let loanAmount = 0;
let annualPercentageRate = -1;
let monthlyIntrestRate = 0;
let loanDurationInMonths = 0;
let loanDuration = 0;

//===============Main==============================
getUserInput();

loanDurationInMonths = loanDuration * 12;

monthlyIntrestRate = calculateMonthlyInterestRate(annualPercentageRate);

monthlyPayment = calculateMonthlyPayment();

let totalCost = monthlyPayment * loanDurationInMonths;
totalCost = roundIntoDollars(totalCost);
let totalInterest = totalCost - loanAmount;
totalInterest = roundIntoDollars(totalInterest);

monthlyPayment = roundIntoDollars(monthlyPayment);

printLoanInfo();

//===============Functions=========================
function message(string) {
  console.log('[' + string + ']');
}

function prompt(string) {
  console.log('===> ' + string);
}

function roundIntoDollars(number) {
  return Math.round(number * 100) / 100;
}

function getUserInput() {
  while(isZeroOrNegative(loanAmount)) {
    prompt("What is the loan amount?");
    loanAmount = Number(readline.prompt());
    if (isZeroOrNegative(loanAmount)) {
      prompt("Please input a positive, non zero number.")
    }
  }
  
  while(isNegative(annualPercentageRate)) {
    prompt("What is the Annual Percentage Rate (APR) as a percent?");
    annualPercentageRate = readline.prompt();
    // extract just the number incase user appends '%'.
    annualPercentageRate = Number(annualPercentageRate.replace(/[^-?0-9]/g,''));
    if (isNegative(annualPercentageRate)) {
      prompt("Please input a positive number or zero.")
    }
  }

  while(isZeroOrNegative(loanDuration)) {
    prompt("How long will the loan be in years?");
    loanDuration = Number(readline.prompt());
    if (isZeroOrNegative(loanDuration)) {
      prompt("Please input a positive, non zero number.")
    }
  }
}

function printLoanInfo() {
  message(`Your monthly payment will be: $${monthlyPayment}.`)
  message(`Your monthly interest rate will be: ${monthlyIntrestRate}.`)
  message(`Your total cost will be: $${totalCost}.`)
  message(`Your total interest to be paid is: $${totalInterest}`)  
}

function calculateMonthlyInterestRate(APR) {
  if (APR === 0) {
    return 0;
  } else {
    return (APR / 100) / 12;
  }
}

function calculateMonthlyPayment() {
  if (monthlyIntrestRate === 0) {
    return loanAmount / loanDurationInMonths;
  } else {
    return loanAmount * (monthlyIntrestRate / (1 - Math.pow((1 + monthlyIntrestRate), (-loanDurationInMonths))));
  }
}

function isZeroOrNegative(num) {
  if (num <= 0) {
    return true;
  }
  else {
    return false;
  }
}

function isNegative(num) {
  if (num < 0) {
    return true;
  }
  else {
    return false;
  }
}