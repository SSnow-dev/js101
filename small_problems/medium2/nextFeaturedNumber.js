const fs = require('fs');
const featuredNumbers = require('./featuredNumbers.json');

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."

function featured(num) {

}
// console.log(featuredNumbers[3]);
// console.log(Number(featuredNumbers[3]));

let answer;
let test = 99999;
for (let i = 0; i <= 9876543201; i++) {
  if (featuredNumbers[i] > test) {
    answer = featuredNumbers[i];
    break;
  }
}
console.log(answer);


// let testNum = 49;
// console.log(featuredNumbers.includes(testNum));
// testNum = 21;
// console.log(uniqueDigits(testNum) && isOdd(testNum) && isMultipleOfSeven(testNum));
// testNum = 35;
// console.log(uniqueDigits(testNum) && isOdd(testNum) && isMultipleOfSeven(testNum));
// testNum = 9876543201;
// console.log(uniqueDigits(testNum) && isOdd(testNum) && isMultipleOfSeven(testNum));


// let allFeaturedNums = [];
// for (let i = 0; i <= 987654; i++) {
//   if (isFeaturedNumber(i)) {
//     allFeaturedNums.push(i);
//   }
// }

// fs.writeFile('./featuredNumbers.json', JSON.stringify(allFeaturedNums), err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('File successfully written!');
//   }
// });


function uniqueDigits(num) {
  if (num < 10 && num > -10) {
    return true;
  }
  let array = [];
  let duplicates = 0;
  num.toString().split('').forEach(digit => {
    if (array.includes(digit)) {
      duplicates++;
    } else {
      array.push(digit);
    }
  });
  return duplicates === 0;
}

function isOdd(num) {
  if (num % 2 != 0) {
    return true;
  } else return false;
}

function isMultipleOfSeven(num) {
  if (num % 7 === 0) {
    return true;
  } else return false;
}

function isFeaturedNumber(num) {
  return uniqueDigits(num) && isOdd(num) && isMultipleOfSeven(num);
}