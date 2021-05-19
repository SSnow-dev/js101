const NON_ALPHA_CHARS = /[^a-zA-Z]/g;
const TWO_OR_MORE_SPACES = /[\s]{2}/g;

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "

function cleanUp(string) {
  return string.replaceAll(NON_ALPHA_CHARS, ' ').replaceAll(TWO_OR_MORE_SPACES, '');
}