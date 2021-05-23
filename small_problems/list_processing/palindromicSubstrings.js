console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]


function palindromes(string) {
  let palidromeSubStrings = [];
  let counter = 0;
  while (counter < string.length) {
    for (let i = 1 + counter ; i <= string.length; i++) {
      let currentString = string.substring(counter, i);
      if (isPalindrome(currentString)) {
        palidromeSubStrings.push(currentString);
      }
    }
    counter ++;
  }
  return palidromeSubStrings;
}


function isPalindrome(string) {
  return string.length > 1 && string === string.split('').reverse().join('');
}