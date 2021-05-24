console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"

function swapCase(string) {
  return string.split('').map(
    char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    ).join('');
}