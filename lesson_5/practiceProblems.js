console.log('=======================[Question 1]=======================');
//Q1

let arr = ['10', '11', '9', '7', '8'];
console.log(arr.sort((a, b) => a - b));

console.log('=======================[Question 2]=======================');
//Q2

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];
books.sort((a, b) => Number(a.published) - Number(b.published));

console.log(books);

console.log('=======================[Question 3]=======================');
//Q3

let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];

let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};

console.log(arr1[2][1][3]);
console.log(arr2[1].third[0]);
console.log(arr3[2].third[0][0]);
console.log(obj1.b[1]);
console.log(Object.keys(obj2.third)[0]);

console.log('=======================[Question 4]=======================');
//Q4

arr1 = [1, [2, 3], 4];

arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];

obj1 = { first: [1, 2, [3]] };

obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };

arr1[1][1] = 4;
console.log(arr1);
arr2[2] = 4;
console.log(arr2);
obj1.first[2][0] = 4;
console.log(obj1);
obj2.a.a[2] = 4;
console.log(obj2);

console.log('=======================[Question 5]=======================');
//Q5

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let totalMaleAge = 0;
Object.entries(munsters).forEach(munster => {
  if (munster[1].gender === 'male') {
    totalMaleAge += munster[1].age;
  }
});
console.log('The total age of all the males is: ' + totalMaleAge);
console.log();

console.log('=======================[Question 6]=======================');
//Q6

for (let member in munsters) {
  let munster = munsters[member];
  console.log(`${member} is a ${munster.age}-year-old ${munster.gender}.`)
}

console.log('=======================[Question 7]=======================');
//Q7

// a === 2;
// b === [3, 8];
console.log('a === 2, b === [3, 8]');
console.log('=======================[Question 8]=======================');
//Q8
let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let vowels = [];
console.log(Object.values(obj).forEach(obj => {
  obj.forEach(word => {
    vowels.push(word.replace(/[^aeiou]/g, ''));
  });
}));
//log all vowels in array format matching input array
console.log(vowels);
//log all vowels as single string
console.log(vowels.join(''));
//log all vowels as single chars
vowels.forEach(string => {
  if (string.length > 1) {
    string.split('').forEach(char => {
      console.log(char);
    });
  } else {
    console.log(string);
  }
});

console.log('=======================[Question 9]=======================');
//Q9
arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];
// let orderedArr = arr.slice();
// orderedArr.forEach(element => {
//   if (element[0] === Number(element[0])) {
//     element.sort((a, b) => a - b);
//   } else {
//     element.sort();
//   }
// });

let orderedArr = arr.map(array => {
  if (array[0] === Number(array[0])) {
    return array.slice().sort((a, b) => a - b);
  } else {
    return array.slice().sort();
  }
});
console.log(arr);
console.log(orderedArr);

console.log('=======================[Question 10]=======================');
//Q10

let orderedArrDecending = arr.map(array => {
  if (array[0] === Number(array[0])) {
    return array.slice().sort((a, b) => b - a);
  } else {
    return array.slice().sort().reverse();
  }
});
console.log(orderedArrDecending);
console.log();

console.log('=======================[Question 11]=======================');
//Q11

arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

inrementedObj = arr.map(obj => {
  let newObj = {};
  
  for (let key in obj) {
    newObj[key] = obj[key] + 1;
  }
  return newObj;
});

console.log();

console.log(inrementedObj);
console.log(arr);

console.log('=======================[Question 12]=======================');
//Q12
console.log();
arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let multiplesOfThree = arr.map(numArr => {
  return numArr.filter(num => num % 3 === 0);
});
console.log(multiplesOfThree);

console.log('=======================[Question 13]=======================');
//Q13
console.log();
arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((a, b) => {
  let oddTotalA = 0;
  let oddTotalB = 0;
  a.forEach(num => {
    if (num % 2 !== 0) {
      oddTotalA += num;
    }
  });
  b.forEach(num => {
    if (num % 2 !== 0){
      oddTotalB += num;
    }
  });
  return oddTotalA - oddTotalB;
});

console.log(arr);
console.log('=======================[Question 14]=======================');
//Q14

obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let array = [];
for (let plant in obj) {
  for (let key in obj[plant]) {
    if (obj[plant].type === 'fruit' && key === 'colors') {
      let colors = obj[plant][key];
      array.push(colors.map(color => {
        return color[0].toUpperCase() + color.slice(1);
      }));
    }
    if (obj[plant].type === 'vegetable' && key === 'size') {
      let size = obj[plant][key];
      array.push(size.toUpperCase());
    }
  }
}
console.log(array);

console.log('=======================[Question 15]=======================');
//Q15

arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let evenObjects = arr.filter(obj => {
  return Object.values(obj).every(subArr => {
    return subArr.every(number => {
      return number % 2 === 0;
    });
  });
});
console.log(evenObjects);

console.log('=======================[Question 16]=======================');
//Q16

arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

let newObj = {};
arr.forEach(array => {
  newObj[array[0]] = array[1];
});

console.log(newObj);

console.log('=======================[Question 17]=======================');
//Q17

function generateUUID() {
  const POSSIBLE_VALUES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

  function randomHexNumber() {
    let index = Math.floor(Math.random() * POSSIBLE_VALUES.length);
    return POSSIBLE_VALUES[index];
    }
    
    function buildPart(string, length) {
      for (let i = 0; i < length; i++) {
        string += randomHexNumber();
      }
      return string;
    }

    let firstPart = '';
    let secondPart = '';
    let thirdPart = '';
    let fourthPart = '';
    let fifthPart = '';

    firstPart = buildPart(firstPart, 8);
    secondPart = buildPart(secondPart, 4);
    thirdPart = buildPart(thirdPart, 4);
    fourthPart = buildPart(fourthPart, 4);
    fifthPart = buildPart(fifthPart, 12);

    finalString = `${firstPart}-${secondPart}-${thirdPart}-${fourthPart}-${fifthPart}`;
    return finalString;
}

for (let i = 0; i < 10; i++){
  console.log(generateUUID());
}