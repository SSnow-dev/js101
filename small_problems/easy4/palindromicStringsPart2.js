const NOT_ALPHA_OR_NUMBER = /[^a-z0-9]/g;

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false

function isRealPalindrome(string) {
  return isPalindrome(string.toLowerCase().replace(NOT_ALPHA_OR_NUMBER, ''));
}

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}