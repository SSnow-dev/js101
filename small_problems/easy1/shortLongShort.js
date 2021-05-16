console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"
console.log(shortLongShort('short', 'long')); 
console.log(shortLongShort('equal', 'same1')); 

function shortLongShort(string1, string2) {
  let newString = '';
  let shortString = '';
  let longString = '';
  //find shortest string arg
  //if strings are equal length, string1 becomes "short" string.
  if (string1.length <= string2.length) {
    shortString = string1;
    longString = string2;
  } else {
    shortString = string2;
    longString = string1;
  }
  newString += (shortString + (longString + shortString));

  return newString;
}