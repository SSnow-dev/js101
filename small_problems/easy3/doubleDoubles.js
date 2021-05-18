console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676

function twice(num) {
  let numString = num.toString();
  let middle = Math.floor(numString.length / 2);
  let firstHalf = numString.slice(0, (middle));
  let secondHalf = numString.slice(middle);
  return firstHalf === secondHalf ? num : num * 2;
}