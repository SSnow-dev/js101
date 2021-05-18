logInBox('To boldly go where no one has gone before.');
logInBox('');

function logInBox(string) {
  let banner = [
    ['+', '-', '-' ,'+'],
    ['|', ' ', ' ', '|'],
    ['|', ' ', ' ', '|'],
    ['|', ' ', ' ', '|'],
    ['+', '-', '-' ,'+']
  ]
  let neededSpaces = string.length;
  charArray = string.split('');
  
  charArray.forEach((char, index) => {
    banner[0].splice(index + 2, 0, '-');
    banner[1].splice(index + 2, 0, ' ');
    banner[2].splice(index + 2, 0, char);
    banner[3].splice(index + 2, 0, ' ');
    banner[4].splice(index + 2, 0, '-');
  });
  
  let firstRow = banner[0].join('');
  let secondRow = banner[1].join('');
  let thirdRow = banner[2].join('');
  let fourthRow = banner[3].join('');
  let fifthRow = banner[4].join('');
  
  console.log(firstRow);
  console.log(secondRow);
  console.log(thirdRow);
  console.log(fourthRow);
  console.log(fifthRow);
}