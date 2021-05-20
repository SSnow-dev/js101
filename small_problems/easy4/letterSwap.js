console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"

function swap(string) {
  let wordArray = string.split(' ');
  let swapedArray = [];
  wordArray.forEach(word => {
    if (word.length <= 1) {
      swapedArray.push(word);
      return;
    }
    let firstChar = word[0];
    let lastChar = word[word.length -1];
    let middleChars = word.slice(1, word.length -1);
    swapedArray.push(lastChar + middleChars + firstChar);
  });
  return swapedArray.join(' ')
}