console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""
console.log(repeater('Hello world!'));

function repeater(string) {
  let doubleString = '';
  for (let i = 0; i < string.length; i++) {
    doubleString += string[i];
    doubleString += string[i];
  }
  return doubleString;
}