console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]


function union(array1, array2) {
  let comboArray = [];
  array1.forEach(element => {
    comboArray.push(element)
  });

  array2.forEach(element => {
    if (!comboArray.includes(element)) {
      comboArray.push(element);
    }
  });
  return comboArray;
}