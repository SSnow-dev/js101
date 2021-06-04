const LARGEST_FEATURED_NUMBER = 9876543201;

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."

function featured(num) {
  let answer = 0;
  let incrementer = 1;
  for (let startNum = num; startNum <= LARGEST_FEATURED_NUMBER; startNum += incrementer) {
    //short circit if we already changed incrementer to avoid extra function calls.
    if (incrementer != 14 && isOdd(startNum) && isMultipleOfSeven(startNum)) {
      incrementer = 14;
    }
    if (startNum > num && isFeaturedNumber(startNum)) {
      answer = startNum;
      return answer;
    }
  }
  return "There is no possible number that fulfills those requirements.";
}

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