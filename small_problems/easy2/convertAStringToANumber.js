console.log(stringToInteger('1111') + 3);
console.log(stringToInteger('1416') + 3);
console.log();
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

function stringToInteger(string) {
  let integer = 0;
  charArray = string.split('');
  let powCounter = charArray.length -1;
  for (let i = 0; i < charArray.length; i++) {
    integer += (powerOfTen(powCounter) * charToNum(charArray[i]));
    powCounter --;
  }
  return integer;
}

function charToNum(char) {
  let num;
  switch(char) {
    case '1':
      num = 1;
      break;
    case '2':
      num = 2;
      break;
    case '3':
      num = 3;
      break;
    case '4':
      num = 4;
      break;  
    case '5':
      num = 5;
      break;
    case '6':
      num = 6;
      break;
    case '7':
      num = 7;
      break;
    case '8':
      num = 8;
      break;
    case '9':
      num = 9;
      break;
    case '0':
      num = 0;
      break;
  }
  return num;
}

function powerOfTen(pow) {
  let result = 1;
  for (let i = 0; i < pow; i ++) {
    result *= 10;
  }
  return result;
}

