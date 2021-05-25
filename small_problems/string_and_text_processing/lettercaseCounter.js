const UPPERCASE = /[A-Z]/;
const LOWERCASE = /[a-z]/;

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }

function letterCaseCount(string) {
  let results = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  };

  string.split('').forEach(char => {
    if (UPPERCASE.test(char)) {
      results.uppercase ++;
    } else if (LOWERCASE.test(char)) {
      results.lowercase ++;
    } else {
      results.neither ++;
    }
  });
  return results;
}