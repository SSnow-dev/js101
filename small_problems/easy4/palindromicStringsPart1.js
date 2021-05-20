console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true

function isPalindrome(string) {
  let oddOffset = string.length % 2 === 0 ? 0 : 1;
  let middle = (Math.floor((string.length / 2)) + oddOffset);
  let firstHalf = string.slice(0, middle);
  let secondHalf = string.slice(middle - oddOffset).split('').reverse().join('');

  if (firstHalf === secondHalf) {
    return true;
  }
  return false;
}