const NUMBER = /[0-9]/;

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)

function minilang(commands) {
let stack = [];
let register = 0;
let formattedCommands = formatCommands(commands);
for (let i = 0; i < formattedCommands.length; i++) {
  if (formattedCommands[i] === Number(formattedCommands[i])) {
    register = formattedCommands[i] * Math.sign(Number(formattedCommands[i]));
  } else {
    doCommand(formattedCommands[i]);
  }
}

function print() {
  console.log(register);
}

function mult() {
  register *= stack.pop();
}

function push() {
  stack.push(register);
}

function add() {
  register += stack.pop();
}

function sub() {
  register += stack.pop();
}

function pop() {
  register = stack.pop();
}

function div() {
  register = Math.floor(register / stack.pop());
}

function remainder() {
  register = Math.floor(register % stack.pop());
}

function doCommand(command) {
  switch (command) {
    case 'PRINT':
      print();
      break;
    case 'ADD':
      add();
      break;
    case 'MULT':
      mult();
      break
    case 'DIV':
      div();
      break;
    case 'PUSH':
      push();
      break;
    case 'POP':
      pop();
      break;
    case 'REMAINDER':
      remainder();
      break;
    case 'SUB':
      sub();
      break;
  }
}

function formatCommands(commands) {
  return commands.split(' ').map(string => {
    if (NUMBER.test(string)) {
      return Number(string);
    } else {
      return string;
    }
  });
}

}

