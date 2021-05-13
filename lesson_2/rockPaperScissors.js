let readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

let choice;
let computerChoice;

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  choice = readline.question();

  handleChoiceInput();

  computerChoice = computerChoiceLogic();

  prompt(`You chose ${choice}, and the computer chose ${computerChoice}`);

  handleOutcome();
  if (!askToPlayAgain()) {
    break;
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function handleOutcome() {
  if ((choice === 'rock' && computerChoice === 'scissors') ||
  (choice === 'paper' && computerChoice === 'rock') ||
  (choice === 'scissors' && computerChoice === 'paper')) {
  prompt('You win!');
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
         (choice === 'paper' && computerChoice === 'scissors') ||
         (choice === 'scissors' && computerChoice === 'rock')) {
  prompt('Computer wins!');
  } else {
  prompt("It's a tie!");
  }
}

function handleChoiceInput() {
  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice.");
    choice = readline.question();
  }
}

function computerChoiceLogic() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  return VALID_CHOICES[randomIndex];  
}

function askToPlayAgain() {
  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  return (answer[0] === 'y');
}