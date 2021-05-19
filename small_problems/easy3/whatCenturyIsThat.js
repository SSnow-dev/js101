console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"
console.log(century(112001));       // "1121st"

function century(year) {
  let cenString = '';
  let cen = roundUp(year / 100, 0);
  cenString = cen.toString() + suffixToAdd(cen);
  return cenString;
}

function roundUp(num, precision) {
  precision = Math.pow(10, precision);
  return Math.ceil(num * precision) / precision;
}

function suffixToAdd(num) {
  if (num > 99) {
    num = num % 100;
  }

  if (num > 20) {
    num = num % 10;
    return oneDigitSuffix(num);
  } else if (num > 3) {
    return 'th';
  } else {
    return oneDigitSuffix(num);
  }
}

function oneDigitSuffix(digit) {
  // if(digit === 1) {
  //   return 'st';
  // } else if (digit === 2) {
  //   return '2nd';
  // } else if (digit === 3) {
  //   return 'rd';
  // } else {
  //   return 'th';
  // }
  switch(digit) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}