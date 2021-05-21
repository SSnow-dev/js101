console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45

function sum(num) {
  let total = 0;
  let numberArray = num.toString().split('');
  numberArray.forEach(number => {
    total += Number(number);
  });
  return total;
}