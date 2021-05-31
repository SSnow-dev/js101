console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"

function triangle(side1, side2, side3) {
  sortedSides = [side1, side2, side3].sort((a, b) => a - b);
  if (sortedSides.includes(0)) {
    return 'Invalid';
  }
  if (sortedSides[0] + sortedSides[1] < sortedSides[2]) {
    return 'Invalid';
  }
  if (sortedSides[0] === sortedSides[1] && sortedSides[1] === sortedSides[2]) {
    return 'Equilateral';
  }
  if ((sortedSides[0] === sortedSides[1] || sortedSides[1] === sortedSides[2]) &&
    (sortedSides[1] !== sortedSides[2] || sortedSides[0] !== sortedSides[1])) {
      return 'Isoceles';
  }
  return 'Scalene';
}