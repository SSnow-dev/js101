console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845

function maxRotation(int) {
  let rotations = int.toString().length - 1;
  let maxRotated = Number(rotateArray(int.toString().split('')).join(''));
  for (let i = 0; i < rotations; i++) {
    maxRotated = rotateRightmostDigits(maxRotated, rotations - i);
  }

  return maxRotated;
}

function rotateRightmostDigits(number, digit) {
  let array = number.toString().split('');
  let firstSlice = array.slice(0, array.length - digit);
  let lastSlice = array.slice(array.length - digit);
  return Number((firstSlice.concat(rotateArray(lastSlice))).join(''));
}

function rotateArray(array) {
  let rotatedArray = [];
  if (!Array.isArray(array)) {
    return undefined
  };
  
  if (array.length > 0) {
    for (let i = 1; i < array.length; i++) {
      rotatedArray.push(array[i]);
    }
    rotatedArray.push(array[0]);
  }
  
  return rotatedArray;
}