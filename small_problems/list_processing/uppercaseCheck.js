const LOWERCASE = /[a-z]/g;

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true

function isUppercase(string) {
  return string.split('').filter(char => LOWERCASE.test(char)).length === 0;
}