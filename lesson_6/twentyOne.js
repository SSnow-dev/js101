const readline = require('readline-sync');

const CARDS = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
const BUST_VALUE = 21;
const COMPUTERS_MAX_HIT_VALUE = 17;
const MATCHES_TO_PLAY = 5;

let score = initializeScore();

while (true) {
  //initialize game
  let deck = [];
  let gameOver = false;

  let playerHand = [];
  let computerHand = [];

  deal(deck, playerHand, computerHand);

  console.clear();
  displayHands(playerHand, computerHand);

  while (true) {
    prompt("[H]it or [S]tay?");
    let answer = readline.question();
    //loop untill valid input
    if (answer.length > 0 && answer[0].toLowerCase() === 'h') {
      drawCard(deck, playerHand);
    } else if (answer.length > 0 && answer[0].toLowerCase() === 's') {
      break;
    } else {
      alert("Sorry that's not a valid input, press enter to try again.");
      readline.prompt();
    }
    console.clear();
    displayHands(playerHand, computerHand);

    if (checkForBust(playerHand)) {
      alert("Sorry you busted!");
      handleWinner('Dealer', score);
      gameOver = true;
      break;
    }
  }
  //if player did not bust
  if (!gameOver) {
    computerTurn(deck, computerHand, score);
    if (valueOfHand(computerHand) <= BUST_VALUE) {
      if (checkForTie(playerHand, computerHand)) {
        displayAllCards(playerHand, 'Player');
        alert("It's a tie!");
      } else {
        displayAllCards(playerHand, 'Player');
        let winner = decideWinner(playerHand, computerHand);
        console.log(winner);
        handleWinner(winner, score);
      }
    }
  }
  //look if any play has max amount of match wins,
  //if so reset score object and display winner.
  if (checkForScoreOf(score, MATCHES_TO_PLAY)) {
    alert(`${checkForScoreOf(score, MATCHES_TO_PLAY)} has won ${MATCHES_TO_PLAY} matches and wins the set!`);
    score = initializeScore();
  }
  //display score if it is not 0
  if (score.Player !== 0 || score.Dealer !== 0) {
    alert(`The score is Player: ${score.Player} and Dealer: ${score.Dealer}`);
  }
  if (!playAgain()) break;
}
alert("Thanks for playing!");

function initializeDeck(deck, cards) {
  cards.forEach(card => {
    for (let numOfEachCard = 0; numOfEachCard < 4; numOfEachCard++) {
      deck.push(card);
    }
  });
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
}

function drawCard(deck, hand) {
  hand.push(deck.pop());
}

function valueOfHand(hand) {
  let handValue = 0;
  let aceCount = 0;
  hand.forEach(card => {
    if (Number(card) === card) {
      handValue += card;
    } else if (/\b(?:jack|queen|king)\b/gi.test(card)) {
      handValue += 10;
    } else if (card === 'Ace') {
      aceCount += 1;
    }
  });
  if (aceCount === 0) {
    return handValue;
  } else {
    while (aceCount > 0) {
      if (handValue + 11 > BUST_VALUE) {
        handValue += 1;
        aceCount -= 1;
      } else {
        handValue += 11;
        aceCount -= 1;
      }
    }
  }
  return handValue;
}

function deal(deck, playerHand, computerHand) {
  initializeDeck(deck, CARDS);
  shuffle(deck);

  drawCard(deck, playerHand);
  drawCard(deck, playerHand);

  drawCard(deck, computerHand);
  drawCard(deck, computerHand);
}

function prompt(string) {
  console.log(`==> ${string}`);
}

function alert(string) {
  console.log(`*****${string}*****`);
}

function displayKnownCard(hand, person) {
  let knownCard = hand[0];
  console.log(`${person} has ${knownCard} and unknown card`);
}

function displayAllCards(hand, person) {
  console.log(
    `${person} has ${joinOr(hand, ', ', 'and')}. Total value: ${valueOfHand(hand)}`);
}

function checkForBust(hand) {
  if (valueOfHand(hand) > BUST_VALUE) {
    return true;
  } else {
    return false;
  }
}

function displayHands(playerHand, computerHand) {
  displayAllCards(playerHand, 'Player');
  displayKnownCard(computerHand,'Dealer');
}

function joinOr(array, seperator = ', ', string = 'or') {
  if (array.length <= 1) {
    return array.join('');
  }
  let finalString = '';
  let lastElement = array.length - 1;

  finalString = array.slice(0, lastElement).join(seperator);
  finalString = finalString.concat('', `${seperator}${string} ${array[lastElement]}`);
  return finalString;
}

function computerTurn(deck, computerHand, score) {
  while (valueOfHand(computerHand) < COMPUTERS_MAX_HIT_VALUE) {
    drawCard(deck, computerHand);
    console.log('The dealer takes a card. \n==>Press Enter.');
    readline.prompt();
  }
  if (checkForBust(computerHand)) {
    displayAllCards(computerHand, 'Dealer');
    alert("Dealer busts!");
    handleWinner('Player', score);
  } else {
    displayAllCards(computerHand, 'Dealer');
  }
}

function decideWinner(playerHand, computerHand) {
  if (valueOfHand(playerHand) > valueOfHand(computerHand)) {
    return "Player";
  } else {
    return "Dealer";
  }
}

function checkForTie(playerHand, computerHand) {
  if (valueOfHand(playerHand) === valueOfHand(computerHand)) {
    return true;
  } else {
    return false;
  }
}

function playAgain() {
  let answer;
  while (true) {
    prompt('Play again? (y or n)');
    answer = readline.question().toLowerCase();
    if (answer !== 'y' && answer !== 'n') {
      prompt("Sorry thats not a valid choice.");
    } else {
      break;
    }
  }
  return answer === 'y';
}

function initializeScore() {
  return {
    Player: 0,
    Dealer: 0
  };
}

function checkForScoreOf(score, wins) {
  if (score.Player === wins) {
    return 'Player';
  }
  if (score.Dealer === wins) {
    return 'Dealer';
  }
  return '';
}

function handleWinner(winner, score) {
  alert(`${winner} wins!`);
  score[winner]++;
}