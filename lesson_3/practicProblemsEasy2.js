//Q1
displayQuestion(1);
let advice = "Few things in life are as important as house training your pet dinosaur.";

let urgentAdvice = advice.replace(/important/g, 'urgent');

console.log(urgentAdvice);

//Q2
displayQuestion(2);
let numbers = [1, 2, 3, 4, 5];
let reversedNumbers = numbers.slice(0).reverse();
console.log(numbers); // [1, 2, 3, 4, 5]
console.log(reversedNumbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
let sortedNumbers = [...numbers].sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 1, 2, 3, 4, 5 ]
console.log(sortedNumbers); // [ 5, 4, 3, 2, 1 ]

let foreachNumbers = [];
numbers.forEach((num) => {
  foreachNumbers.unshift(num)
});
console.log(foreachNumbers);

//Q3
displayQuestion(3);
numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

console.log(numbers.includes(number1));
console.log(numbers.includes(number2));

//Q4
displayQuestion(4);

let famousWords = "seven years ago...";

famousWords = 'Four score and ' + famousWords;
console.log(famousWords);

famousWords = "seven years ago...";
famousWords = 'Four score and '.concat(famousWords);
console.log(famousWords);

//Q5
displayQuestion(5);
numbers = [1, 2, 3, 4, 5];
numbers.splice(2,1);
console.log(numbers);

//Q6
displayQuestion(6);
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

let unNestedFlintstones = [];
flintstones.forEach((element) => {
  if (isString(element)) {
    unNestedFlintstones.push(element);
  } else {
    element.forEach((string) => {
    unNestedFlintstones.push(string);
    })
  }
});

console.log(unNestedFlintstones);

//Q7
displayQuestion(7);
flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

let barneyAarray = [];
barneyAarray.push(Object.keys(flintstones)[2]);
barneyAarray.push(flintstones.Barney);

barneyAarray2 = Object.entries(flintstones).filter(pair => pair[0] === 'Barney').shift();

console.log(barneyAarray);
console.log(barneyAarray2);


function displayQuestion(questionNumber) {
  console.log(`========== Question ${questionNumber} ==========`);
}

function isString(arg) {
  return (typeof arg === 'string' || arg instanceof String);
}

//Q8
displayQuestion(8);
numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
console.log(Array.isArray(numbers));
console.log(Array.isArray(table));

//Q9
displayQuestion(9);
let title = "Flintstone Family Members";
paddedTitle = title.padStart(Math.floor((40 - title.length) / 2) + title.length, ' ');
console.log(paddedTitle);

//Q10
displayQuestion(10);
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

statement1.split('').filter(char=> char === 't').length;
statement2.split('').filter(char=> char === 't').length;