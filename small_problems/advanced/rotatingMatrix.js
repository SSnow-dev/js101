let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]

function rotate90(matrix) {
  let transposedMatrix = [];
  //push an empty array (colomun) into transposedMatrix equal 
  //to the number of elements per row of passed matrix argument
  matrix[0].forEach(_ => {
    transposedMatrix.push([]);
  });
  let column = 0;
  //loop through each column that was just pushed into transposedMatrix
  while (column < transposedMatrix.length) {
    //start at length -1 to work backwards through the rows.
    for (let row = matrix.length -1; row >= 0; row--) {
      transposedMatrix[column].push(matrix[row][column]);
    }
    column ++;
  }
  return transposedMatrix;
}

//visualization of steps
//newMatrix[0] push[2][0]
//newMatrix[0] push[1][0]
//newMatrix[0] push[0][0]

//newMatrix[1] push[2][1]
//newMatrix[1] push[1][1]
//newMatrix[1] push[0][1]

//newMatrix[2] push[2][2]
//newMatrix[2] push[1][2]
//newMatrix[2] push[0][2]
