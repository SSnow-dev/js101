console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
console.log(hexadecimalToInteger('4D9f') === 19871);

function stringToInteger(string) {
  const CHAR_TO_DIGIT = {
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
  
  let number = 0;
  let arrayOfDigits = string.split('').map((char) => CHAR_TO_DIGIT[char]);
  arrayOfDigits.forEach((num) => number = (number * 10) + num); 
  return number;
}

function hexadecimalToInteger(string) {
  const HEX_CHAR_TO_DIGIT = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15
  };
  let hexValue = 0;
  let arrayOfHexDigits = string.split('').map((char) => HEX_CHAR_TO_DIGIT[char]);
  arrayOfHexDigits.forEach((num) => hexValue = (hexValue * 16) + num);
  return hexValue;
}