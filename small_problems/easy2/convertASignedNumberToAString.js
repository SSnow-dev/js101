console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
console.log(signedIntegerToString(-35));

function signedIntegerToString(num) {
  if (num < 0) {
    return '-' + integerToString(-num);
  } else if (num > 0) {
    return '+' + integerToString(num);
  }
  return '0';
}

function integerToString(num) {

  const NUM_TO_CHAR = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
    };
  
  let string = '';
  do {
    string = NUM_TO_CHAR[num % 10] + string;
    num = Math.floor(num / 10);
  } while (num > 0);
  return string;
}