//Q1

let arr = ['10', '11', '9', '7', '8'];
console.log(arr.sort((a, b) => a - b));

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
//Q6

for (let member in munsters) {
  let munster = munsters[member];
  console.log(`${member} is a ${munster.age}-year-old ${munster.gender}.`)
}

//Q7

// a === 2;
// b === [3, 8];

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

//Q12
console.log();
arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let multiplesOfThree = arr.map(numArr => {
  return numArr.filter(num => num % 3 === 0);
});
console.log(multiplesOfThree);

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

//Q14

