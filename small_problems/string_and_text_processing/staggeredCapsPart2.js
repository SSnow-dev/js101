const ALPHA = /[a-z]/i;

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

//set counter
//for each char
//check if alpha
//if alpha, push alternate caps char based on counter
//increment counter
//else push without incrementing counter

function staggeredCase(string) {
  let counter = 0;
  return string.split('').map(char => {
    if (ALPHA.test(char)) {
      let newChar = upperCaseIfEven(counter, char);
      counter ++;
      return newChar;
    } else {
      return upperCaseIfEven(counter, char);
    }
  }).join('');
}

function upperCaseIfEven(num, string) {
  if (num % 2 === 0) {
    return string.toUpperCase();
  } else {
    return string.toLowerCase();
  }
}