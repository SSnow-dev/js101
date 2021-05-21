console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

// planned logic
//turn string into array;
//look through array in order;
//if encounter '(' continue looking untill find matching half.
//if no matching half return false;
//if match found, remove match from array.
//search again untill no more parens. 
//if finish search with no falses, return true.

// actual finished logic
//turn string into array;
//look through whole array in order;
//each encounter with '(' look for and delete matching paren ')' starting from index of the '('.
//once this process is finished search for any remaining lone ')'
//if find lone ')' return false
//default to return true.


function isBalanced(string) {
  let result = true;;
  let stringArray = string.split('');

  for (let i = 0; i < stringArray.length; i++) {
    if(stringArray[i] === '(') {
      if(!deleteMatchingParen(i)) {
        result = false;
      }
    }
  }
  stringArray.forEach(char => {
    if (char === ')') {
      result = false;
    }
  });

  return result;
  //finds matching paren and changes it to ' ', returns false if nothing deleted.
  function deleteMatchingParen(index) {
    for (let j = index; j < stringArray.length; j++) {
      if (stringArray[j] === ')') {
        stringArray[j] = ' ';
        return true;
      } 
    }
    return false;
  }
}

