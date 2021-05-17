integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"

console.log(integerToString(4321) === '4321');
console.log(integerToString(0) === '0');
console.log(integerToString(5000) === '5000');
console.log(integerToString(1234567890) === '1234567890');

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
