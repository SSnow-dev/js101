console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]

// function merge(arr1, arr2) {
//   let mergedArray = [];
//   arr1Copy = arr1.slice();
//   arr2Copy = arr2.slice();

//   while (arr1Copy.length > 0 || arr2Copy.length > 0 ) {
//     if (arr1Copy[0] >= arr2Copy[0]) {
//       mergedArray.push(arr2Copy.shift());
//     } else if (arr1Copy[0] <= arr2Copy[0]) {
//       mergedArray.push(arr1Copy.shift());
//     }

//     if (arr2Copy.length === 0) {
//       mergedArray.push(arr1Copy.shift());
//     } else if (arr1Copy.length === 0) {
//       mergedArray.push(arr2Copy.shift());
//     }
//   }
//   return mergedArray;
// }

//refactor
function merge(arr1, arr2) {
  let mergedArray = [];
  arr1Copy = arr1.slice();
  arr2Copy = arr2.slice();

  while (arr1Copy.length > 0 && arr2Copy.length > 0 ) {
    mergedArray.push(arr1Copy[0] >= arr2Copy[0] ? arr2Copy.shift() : arr1Copy.shift());
  }
  
  return mergedArray.concat(arr1Copy.length === 0 ? arr2Copy : arr1Copy);
}