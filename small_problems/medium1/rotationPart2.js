console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917

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