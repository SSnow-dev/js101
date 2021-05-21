console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"


function centerOf(string) {
  let middleIndex = Math.floor(string.length / 2);
  let middleChar = '';

  if ( string.length % 2 === 0) {
    middleChar += string[middleIndex - 1];
  }
  middleChar += (string[middleIndex]);
  return middleChar;
}