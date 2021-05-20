console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]

function digitList(int) {
  let digitArray = [];
  let intAsString = int.toString();
  for (let i = 0; i < intAsString.length; i++) {
    digitArray.push(Number(intAsString[i]));
  }
  return digitArray;
}