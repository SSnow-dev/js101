const readline = require('readline-sync');

print('Enter the first number: ');
let num1 = Number(readline.prompt());
print('Enter the second number: ');
let num2 = Number(readline.prompt());

arithmetic(num1, num2);

function arithmetic(num1, num2) {
  print(`${num1} + ${num2} = ${num1 + num2}`);
  print(`${num1} - ${num2} = ${num1 - num2}`);
  print(`${num1} * ${num2} = ${num1 * num2}`);
  print(`${num1} / ${num2} = ${Math.floor(num1 / num2)}`);
  print(`${num1} % ${num2} = ${num1 % num2}`);
  print(`${num1} ** ${num2} = ${num1 ** num2}`);
}

function print(string) {
  console.log(`==> ${string}`);
}