const LOWERCASE = /[a-z]/;
const UPPERCASE = /[A-Z]/;
const NONALPHA = /[^a-z]/i;

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

// console.log(letterPercentages(
//   'Write a function that takes a string and returns an object ' + 
//   'containing the following three properties:'))

function letterPercentages(string) {
  let result = {};
  let upperCase = 0;
  let lowerCase = 0;
  let neither = 0;
  let totalChars = string.length;
  string.split('').forEach(char => {
   if (UPPERCASE.test(char)) {
     upperCase++;
   } else if (LOWERCASE.test(char)) {
     lowerCase++;
   } else {
     neither++;
   }
  });
  result.lowercase = (percent(lowerCase, totalChars)).toFixed(2);
  result.uppercase = (percent(upperCase, totalChars)).toFixed(2);
  result.neither = (percent(neither, totalChars)).toFixed(2);
  //result.totalChars = totalChars;
  return result;
}

// extracted to function for readability
function percent(number, total) {
  return (number / total) * 100;
}