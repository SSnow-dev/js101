let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2

function countOccurrences(array) {
  let occurrences = {};
  array.forEach(element => {
    if (!occurrences[element]) {
      occurrences[element] = 1;
    } else {
      occurrences[element] ++;
    }
  });
  output(occurrences);
}

function output(obj) {
  Object.entries(obj).forEach(entry => {
    console.log(`${entry[0]} => ${entry[1]}`);
  });
}