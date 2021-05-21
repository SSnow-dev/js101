console.log(swapName('Joe Roberts'));    // "Roberts, Joe"

function swapName(fullName) {
  nameArray = fullName.split(' ');
  return `${nameArray[1]}, ${nameArray[0]}`;
}