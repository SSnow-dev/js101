printIsOdd(2);
printIsOdd(5);
printIsOdd(-17);
printIsOdd(-8);
printIsOdd(0);
printIsOdd(7);

function isOdd(num) {
  if (Math.abs(num % 2 === 0)) {
    return false;
  } else {
    return true;
  }
}

function message(string) {
  console.log("===>" + string);
}

function printIsOdd(num) {
  console.log(`Is the absolute value of [${num}] odd? ===> ${isOdd(num)}`);
}