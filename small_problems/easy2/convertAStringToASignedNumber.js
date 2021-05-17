console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true

function stringToSignedInteger(string) {
  if (string[0] === '-') {
    return stringToInteger(string.slice(1)) * -1;
  } else if (string[0] === '+') {
    return stringToInteger(string.slice(1));
  } else {
    return stringToInteger(string);
  }
}

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