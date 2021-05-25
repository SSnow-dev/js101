const VOWELS = /[aieou]/i;

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]

function removeVowels(stringArray) {
  return stringArray.map(
    string => string.split('').filter(char => !VOWELS.test(char)).join(''));
}
