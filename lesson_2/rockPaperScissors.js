let readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

const WINNING_PAIRS = {
  rock : ['scissors', 'lizard'],
  paper : ['rock', 'spock'],
  scissors : ['paper', 'lizard'],
  spock : ['rock', 'scissors'],
  lizard : ['spock', 'paper']
};

const SHORT_INPUT = {
  r : 'rock',
  p : 'paper',
  s : 'scissors',
  l : 'lizard',
  sp : 'spock'
};

let choice;
let computerChoice;
let playerWinCounter = 0;
let computerWinCounter = 0;
let isWinner = false;

gameIntroDisplay();

while (true) {
  handleInput();
  validateChoiceInput();

  computerChoice = computerChoiceLogic();

  prompt(`You chose ${choice}, and the computer chose ${computerChoice}`);

  handleOutcome();
  scoreDisplay();
  winnerDisplay();
  //asks to play again and resets game, if no closes game.
  if (handleGameEnd()) {
    break;
  }

  //helps to visually distinguish different rounds
  console.log('==================================================\n');
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function handleOutcome() {
  if ((computerChoice === WINNING_PAIRS[choice][0]) ||
  (computerChoice === WINNING_PAIRS[choice][1])) {
    prompt('***You win!***');
    addPlayerWin();
  } else if ((choice === WINNING_PAIRS[computerChoice][0]) ||
  (choice === WINNING_PAIRS[computerChoice][1])) {
    prompt('***Computer wins!***');
    addComputerWin();
  } else {
    prompt('***It\'s a tie!***');
  }
}

function validateChoiceInput() {
  while (!VALID_CHOICES.includes(choice)) {
    prompt('That\'s not a valid choice.');
    choice = SHORT_INPUT[readline.question()];
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

function addPlayerWin() {
  playerWinCounter++;
}

function addComputerWin() {
  computerWinCounter++;
}

function resetGame() {
  playerWinCounter = 0;
  computerWinCounter = 0;
  isWinner = false;
}

function scoreDisplay() {
  if (playerWinCounter < 3 && computerWinCounter < 3) {
    prompt(`You're score is: ${playerWinCounter} and the computer's score is: ${computerWinCounter}`);
  }
}

function winnerDisplay() {
  if (playerWinCounter === 3) {
    prompt('*****You won 3 matches! You are the grand winner!*****');
    isWinner = true;
  } else if (computerWinCounter === 3) {
    prompt('*****The computer has won 3 matches and is the grand winner!*****');
    isWinner = true;
  }
}

function handleGameEnd() {
  if (isWinner) {
    if (!askToPlayAgain()) {
      prompt('========[Closing rock, paper, scissor, lizard, spock...]========');
      return true;
    }
    resetGame();
  }
  return false;
}

function gameIntroDisplay() {
  prompt('========[Welcome to rock, paper, scissor, lizard, spock!]========');
  prompt('========[First to 3 wins is the victor!]=======\n');
}

function handleInput() {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  prompt('r) rock p) paper s) scissors sp) spock l) lizard');
  choice = SHORT_INPUT[readline.question()];
}