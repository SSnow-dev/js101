console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"

function reverseWords(string) {
  wordArray = string.split(' ');
  reverseWordArray = [];

  wordArray.forEach(word => {
    if (word.length >= 5) {
      reverseWordArray.push(word.split('').reverse().join(''));
    } else {
      reverseWordArray.push(word);
    }
  });
  return reverseWordArray.join(' ');
}