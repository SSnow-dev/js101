const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];
// 5 rows 4 columns
const matrix2 = [
  [1, 1, 1, 1],
  [2, 2, 2, 2],
  [3, 3, 3, 3],
  [4, 4, 4, 4],
  [5, 5, 5, 5]
];

let newMatrix = transpose(matrix);
let newMatrix2 = transposeUneven(matrix2);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

console.log(matrix2);
console.log(newMatrix2);

function transpose(matrix) {
  let transposedMatrix = [[],[],[]];
  let counter = 0;
  while (counter < matrix.length) {
    for (let row = 0; row < matrix.length; row++) {
      transposedMatrix[counter].push(matrix[row][counter]);
    }
    counter ++;
  }
  return transposedMatrix;
}

//refactor to handle uneven matrices
function transposeUneven(matrix) {
  let transposedMatrix = [];
  matrix[0].forEach(_ => {
    transposedMatrix.push([]);
  });
  let counter = 0;
  while (counter < transposedMatrix.length) {
    for (let row = 0; row < matrix.length; row++) {
      transposedMatrix[counter].push(matrix[row][counter]);
    }
    counter ++;
  }
  return transposedMatrix;
}