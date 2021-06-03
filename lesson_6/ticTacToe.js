const readline = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const NUMBER_OF_MATCHES_TO_WIN = 5;

while (true)
{
  let score = initializeScore();
  let choice = '';
  while (!chooseFirstPlayer(choice)) {
    prompt('Who will go first this set? ([p]layer, [c]omputer, or [r]andom)');
    choice = readline.question();
  }
  while (true) {
    let board = initializeBoard();
   
   
    let firstMove = chooseFirstPlayer(choice);
    while (true) {

      if (handleTurn(board, score, firstMove)) break;
    }
    
    console.clear();
    displayBoard(board);

    if (someoneWon(board)) {
      message(`${detectWinner(board)} won!`);
      handleWin(detectWinner(board), score);
    } else {
      prompt("It's a tie!");
    }

    displayScore(score);

    if (fiveMatchesWon(score)) {
      message(`${detectFiveMatchWinner(score)} won 5 matches and wins the game!`);
      break;
    } else {
      prompt('Press enter to start next match.');
      readline.prompt('');
    }
  }

  
  if (!playAgain()) break;
}


message('Thanks for playing Tic Tac Toe!');


function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function displayBoard(board) {
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}):`);
    square = readline.question().trim();

    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }
  
  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  let threat = detectImmediateThreat(board);
  let winningSqaure = detectImmediateWin(board);
  let square;

  if (winningSqaure !== -1) {
    square = winningSqaure;
  } else if (threat !== -1) {
    square = threat;
  } else if (board['5'] === ' ') {
    square = 5;
  } else {
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;
}

function prompt(string) {
  console.log(`==> ${string}`);
}

function message(string) {
  console.log(`***** ${string} *****`);
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], 
    [1, 4, 7], [2, 5, 8], [3, 6, 9], 
    [1, 5, 9], [3, 5, 7]  
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [ sq1, sq2, sq3 ] = winningLines[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

function joinOr(array, seperator = ', ', string = 'or') {
  if (array.length <= 1) {
    return array.join('');
  }
  let finalString = '';
  let lastElement = array.length - 1;

  finalString = array.slice(0, lastElement).join(seperator);
  finalString = finalString.concat('', `${seperator}${string} ${array[lastElement]}`)
  return finalString;
}

function handleWin(winner, score) {
  if (winner === 'Player') {
    score['playerWins'] += 1;
  } else if (winner === 'Computer') {
    score['computerWins'] += 1;
  }
}

function displayScore(score) {
  prompt(`The score is: Player: ${score.playerWins} Computer: ${score.computerWins}`);
}

function initializeScore() {
  return {
    playerWins: 0,
    computerWins: 0
  };
}

function detectFiveMatchWinner(score) {
  if (score.playerWins >= 5) {
    return 'Player';
  } else if (score.computerWins >= 5) {
    return 'Computer';
  }
}

function fiveMatchesWon(score) {
  return !!detectFiveMatchWinner(score)
}

function displayGame(board, score) {
  console.clear();
  displayBoard(board);
  displayScore(score);
}

function detectImmediateThreat(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], 
    [1, 4, 7], [2, 5, 8], [3, 6, 9], 
    [1, 5, 9], [3, 5, 7]  
  ];
  let immediateThreat = -1;

  for (let line = 0; line < winningLines.length; line++) {
    let [ sq1, sq2, sq3 ] = winningLines[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === ' '
    ) {
      immediateThreat = sq3;
    }
    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === ' ' &&
      board[sq3] === HUMAN_MARKER
    ) {
      immediateThreat = sq2;
    }
    if (
      board[sq1] === ' ' &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      immediateThreat = sq1;
    }
  }
  return immediateThreat;
}

function detectImmediateWin(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], 
    [1, 4, 7], [2, 5, 8], [3, 6, 9], 
    [1, 5, 9], [3, 5, 7]  
  ];
  let immediateWin = -1;

  for (let line = 0; line < winningLines.length; line++) {
    let [ sq1, sq2, sq3 ] = winningLines[line];

    if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === ' '
    ) {
      immediateWin = sq3;
    }
    if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === ' ' &&
      board[sq3] === COMPUTER_MARKER
    ) {
      immediateWin = sq2;
    }
    if (
      board[sq1] === ' ' &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      immediateWin = sq1;
    }
  }
  return immediateWin;
}

function playAgain() {
  let answer;
  while (true) {
    prompt('Play again? (y or n)');
    answer = readline.question().toLowerCase();
    if (answer !== 'y' && answer !== 'n') {
      prompt("Sorry thats not a valid choice.")
    } else {
      break;
    }
  }
  if (answer === 'y') return true;
  if (answer === 'n') return false;
}

function handleTurn(board, score, firstMove) {
  if (firstMove === 'player') {
    displayGame(board, score);
    playerChoosesSquare(board);
    if (wonOrFull(board)) return true;

    computerChoosesSquare(board);
    if (wonOrFull(board)) return true;
  } else if (firstMove === 'computer'){
    computerChoosesSquare(board);
    if (wonOrFull(board)) return true;

    displayGame(board, score);
    playerChoosesSquare(board);
    if (wonOrFull(board)) return true;
  }
}

function wonOrFull(board) {
  if (someoneWon(board) || boardFull(board)) return true;
}

function chooseFirstPlayer(choice) {
  if (!choice) return false;
  switch (choice[0].toLowerCase()) {
    case 'p':
      return 'player';
    case 'c':
      return 'computer';
    case 'r':
      if (Math.floor(Math.random() * 2) === 1) {
        return 'player';
      } else {
        return 'computer';
      }
    default:
      return false;
  }
}