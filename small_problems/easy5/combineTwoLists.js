console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]


function interleave(array1, array2) {
  let mixedArray = [];
  for (let i = 0; i < array1.length; i++) {
    mixedArray.push(array1[i], array2[i]);
  }
  return mixedArray;
}