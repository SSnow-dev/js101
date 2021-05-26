const ALPHA_TO_DIGIT = {
  zero: '0',
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9'
}

const IS_ALPHA = /[a-z]/i;

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
"Please call me at 5 5 5 1 2 3 4. Thanks."
console.log(wordToDigit('Please call me at five-five-five-one-two-three-four. Thanks.'));

// function wordToDigit(string) {
//   return string.split(' ').map(word => {
//     console.log(alphaOnly(word));
//     if (Object.keys(ALPHA_TO_DIGIT).includes(alphaOnly(word))) {
//       return ALPHA_TO_DIGIT[alphaOnly(word)].concat(nonAlphaOnly(word));
//     } else {
//       return word;
//     }
//   }).join(' ');
  
//   function alphaOnly(string) {
//     return string.split('').filter(char => IS_ALPHA.test(char)).join('');
//   }

//   function nonAlphaOnly(string) {
//     return string.split('').filter(char => !IS_ALPHA.test(char)).join('');
//   }
// }

//refactor
function wordToDigit(string) {
  Object.keys(ALPHA_TO_DIGIT).forEach(word => {
    let wordExp = new RegExp(word, 'g');
    string = string.replace(wordExp, ALPHA_TO_DIGIT[word]);
  });

  return string;
}