console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}

function wordSizes(string) {
  let result = {};
  let wordArray = string.split(' ');
  
  wordArray.forEach((word) => {
    if (word.length === 0) { 
      return;
    }
    if (!result[word.length]) {
      result[word.length] = 1;
    } else {
      result[word.length]++;
    }
  });

  return result;
}
