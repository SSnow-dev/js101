console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0

function negative(num) {
  if (num < 0) {
    return num;
  } else {
    return -num;
  }
}