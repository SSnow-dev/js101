const readline = require('readline-sync');

const CARDS = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'j', 'q', 'k', 'a'];
let deck = [];

let playerHand = [];
let computerHand = [];

initializeDeck(deck, CARDS);

console.log(deck);
console.log(deck.length);
shuffle(deck);
console.log(deck);
console.log(deck.length);

for(let i = 0; i < 5; i++) {
  drawCard(deck, playerHand);
}
console.log(playerHand);
console.log(deck);
console.log(deck.length);
console.log('==========================================');
console.log(valueOfHand(playerHand));

computerHand = [5, 6, 'a',];
console.log(valueOfHand(computerHand));
computerHand = [4, 6, 'a',];
console.log(valueOfHand(computerHand));
computerHand = [7, 'a', 'a',];
console.log(valueOfHand(computerHand));


function initializeDeck(deck, cards) {
  cards.forEach(card => {
    for (let i = 0; i < 4; i++) {
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
    } else if (/[jqk]/.test(card)) {
      handValue += 10;
    } else if (card === 'a') {
      aceCount += 1;
    }
  });
  if (aceCount === 0) {
    return handValue;
  } else while (aceCount > 0) {
    if (handValue + 11 > 21) {
      handValue += 1;
      aceCount -= 1;
    } else {
      handValue += 11;
      aceCount -= 1;
    }
  }
  return handValue;
}