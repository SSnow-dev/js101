function countDown(number) {
  if (number === 0) {
    return;
  }
  console.log(number);
  return countDown(number -1);
}

countDown(5);

function evenOrOdd(num) {
  if (num === 2) {
    return 'Even';
  }
  if (num === 1) {
    return 'Odd';
  }
  return evenOrOdd(num -2);
}

console.log(evenOrOdd(20)) // Even
console.log(evenOrOdd(75)) // Odd
console.log(evenOrOdd(98)) // Even
console.log(evenOrOdd(113)) // Odd

function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) ||
      find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, '1');
}

console.log(findSolution(24));
console.log(findSolution(56));
console.log(findSolution(37));
console.log(findSolution(15));



function recursiveReverse(string) {
  let reversedString = '';
  function reverse(string, index) {
    if (reversedString.length === string.length) {
      return reversedString;
    }
    reversedString += string[index - 1];
    return reverse(string, index - 1)
  }
  return reverse(string, string.length);
}

console.log(recursiveReverse('freeCodeCamp') === 'pmaCedoCeerf');

function recursiveCharCount(string, char) {
  let charCount = 0;
  function count(string, index) {
    if (index === string.length) {
      return charCount;
    }
    if (char === string[index]) {
      charCount ++;
    }
    return count(string, index + 1);
  }
  return count(string, 0);
}

console.log(recursiveCharCount("JavaScript", 'a'));