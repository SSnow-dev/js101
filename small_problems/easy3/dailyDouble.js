//split string to array
//for each char in string array
//is char equal to next char? 
//yes? ignore (continue)
//no? 
//concat char to new string
//return new string
console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""

function crunch(string) {
  let stringArray = string.split('');
  let newString = '';
  stringArray.forEach((char, index) => {
    if (char !== stringArray[index + 1]) {
      newString += char;
    }
  });
  return newString;
}

