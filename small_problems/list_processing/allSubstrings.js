console.log(allSubstrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]

function allSubstrings(string) {
  let subStrings = [];
  let counter = 0;
  while (counter < string.length) {
    for (let i = 1 + counter ; i <= string.length; i++) {
      subStrings.push(string.substring(counter, i));
    }
    counter ++;
  }
  
  return subStrings;
}