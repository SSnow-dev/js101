console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

function leadingSubstrings(string) {
  let subStrings = [];
  for (let i = 1 ; i <= string.length; i++) {
    subStrings.push(string.substring(0, i));
  }
  return subStrings;
}