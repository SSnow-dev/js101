//Q1

//will return a copy of the original array without filtering anything.
//filter selects based on truthiness of it's callback function, 'hi' is truthy.

//Q2
//map will return undefined, it edits (mutates) the original array and 
//this example has no explicit return statement.
//every function in javascript has to return something and will default to undefined.

//Q3
//since this version does not use braces it dosn't need 
//an explicit return statement to return a (non undefined) value.
//it will return num * num. ([1, 4, 9]).

//Q4
//.pop() will return 'caterpillar' and then causes .length to return 11.
//so the whole statement return 11.

//Q5
//the callback will return num * 2, (2,4,6).
//every() returns true

//Q6
//It is destructive. It will change an array's value to a static value,
//from a start and end index.
//check MDN (documentation) or try the function and check the values with code.

//Q7
//map() will return a new array. [undefiend, 'bear']
//map affects every element since we have if logic in the callback 
//not every value evaluates true.
//since the element that evaluates false doesn't explicitly return a value 
//it implicitly returns false.

//Q8
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let flintstonesObj = {};
flintstones.forEach((person, index) => {
  flintstonesObj[person] = index;
});

console.log(flintstonesObj);

//Q9
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};
let ageSum = 0;
agesArray = Object.entries(ages);
agesArray.forEach(munster => {
  ageSum += munster[1];
});
console.log('ageSum: ' + ageSum);

//Q10
minAge = Infinity;
agesArray.forEach(munster => {
  if (munster[1] < minAge) {
    minAge = munster[1];
  }
});
console.log('minAge: ' + minAge);

//Q11
let statement = "The Flintstones Rock";
let charCount = {};
statement.split('').filter(char => char !== ' ').forEach(char => {
  if (!charCount[char]) {
    charCount[char] = 1;
  } else {
    charCount[char] ++;
  }
});
console.log(charCount);