console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"

// function staggeredCase(string) {
//   let staggeredCase = [];
//   stringArray = string.split('');
//   for (let i = 0; i < string.length; i++) {
//     if (i % 2 === 0) {
//       staggeredCase.push(stringArray[i].toUpperCase());
//     } else {
//       staggeredCase.push(stringArray[i].toLowerCase());
//     }
//   }
//   return staggeredCase.join('');
// }

//refactor
function staggeredCase(string) {
  return string.split('').map((
    char, index) => index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
  ).join('');
}