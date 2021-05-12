const readLineSync = require('readline-sync');
const SQUARE_METER_IN_FEET = 10.7639;

message("How big is the room?");

prompt("Enter the length of the room in meters:");
let length = readLineSync.prompt();
length = parseInt(length, 10);

prompt("Enter the width of the room in meters:");
let width = readLineSync.prompt();
width = parseInt(width, 10);

let sizeInSquareMeters = length * width;
let sizeInSquareFeet = sizeInSquareMeters * SQUARE_METER_IN_FEET;

message(`The area of the room is: ${sizeInSquareMeters} square meters (${sizeInSquareFeet} square feet.)`);

function message(string) {
  console.log('[' + string + ']');
}

function prompt(string) {
  console.log('===> ' + string);
}