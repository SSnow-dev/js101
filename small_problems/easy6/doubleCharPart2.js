// const VOWELS_DIGITS_PUNCTUATION_SPACE = /[aeiou.!?\d\s]/g;
const ALPHA_CHAR = /[a-zA-Z]/;
const VOWELS = /[aeiou]/;

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""


function doubleConsonants(string) {
  let doubleString = '';
  for (let i = 0; i < string.length; i++) {
    doubleString += string[i];
    if (ALPHA_CHAR.test(string[i]) && (!VOWELS.test(string[i]))) {
      doubleString += string[i];
    }
  }
  return doubleString;
}