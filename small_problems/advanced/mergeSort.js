console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]

function mergeSort(array) {
  if (array.length === 1) return array;
  
  let subArray1 = array.slice(0, array.length / 2);
  let subArray2 = array.slice(array.length / 2);
  subArray1 = mergeSort(subArray1);
  subArray2 = mergeSort(subArray2);

  return merge(subArray1, subArray2);
}

function merge(arr1, arr2) {
  let mergedArray = [];
  arr1Copy = arr1.slice();
  arr2Copy = arr2.slice();

  while (arr1Copy.length > 0 && arr2Copy.length > 0 ) {
    mergedArray.push(arr1Copy[0] >= arr2Copy[0] ? arr2Copy.shift() : arr1Copy.shift());
  }
  
  return mergedArray.concat(arr1Copy.length === 0 ? arr2Copy : arr1Copy);
}