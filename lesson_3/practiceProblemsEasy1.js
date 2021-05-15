//Question 1
displayQuestion('1');
print('the code will not throw an error.');
print('it will return undefined.');

//Question 2
displayQuestion('2');
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

function doesEndInExclamationMark(string) {
  return string.charAt(string.length - 1) === '!';
}

message(`Does [${str1}] end with a exclamation mark?`);
print(doesEndInExclamationMark(str1));
message(`Does [${str2}] end with a exclamation mark?`);
print(doesEndInExclamationMark(str2));

//Question 3
displayQuestion('3');
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };


names = Object.keys(ages);
message(`Does [${names}] contain 'Spot?`);
print(names.includes('Spot'));

//Question 4
displayQuestion('4');

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

let munstersLowercase = munstersDescription.toLowerCase();
let munstersCapsFix = munstersLowercase.replace(munstersLowercase[0],munstersLowercase[0].toUpperCase());
print(munstersCapsFix);

//Question 5
displayQuestion('5');
print('true');
print('false');

//Question 6
displayQuestion('6');
let additionalAges = { Marilyn: 22, Spot: 237 };
let additionalAgesKeys = Object.keys(additionalAges);
ages[additionalAgesKeys[0]] = additionalAges[additionalAgesKeys[0]];
ages[additionalAgesKeys[1]] = additionalAges[additionalAgesKeys[1]];
console.log(ages);

// Question 7
displayQuestion('7');
str1 = "Few things in life are as important as house training your pet dinosaur.";
str2 = "Fred and Wilma have a pet dinosaur named Dino.";
message(`Does "${str1}" include the name 'Dino'?`);
print(str1.includes('Dino'));
message(`Does "${str2}" include the name 'Dino'?`);
print(str2.includes('Dino'));

//Question 8
displayQuestion('8');
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones[flintstones.length] = 'Dino';
print(flintstones);

//Question 9
displayQuestion('9');
flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"]
flintstones.push('Dino', 'Hoppy');
print(flintstones);

//Question 10
displayQuestion('10');
let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

shortAdvice = advice.slice(advice[0], advice.indexOf('house'));
print(shortAdvice);

function print(string) {
  console.log(`<== ${string}`)
}

function message(string) {
  console.log(` [${string}] `)
}

function displayQuestion(questionNumber) {
  console.log(`========== Question ${questionNumber} ==========`);
}