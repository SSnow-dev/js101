const MIN_AGE = 20;
const MAX_AGE = 120;

for (let i = 0; i < 10; i++) {
  let age = Math.floor(Math.random() * (MAX_AGE - (MIN_AGE + 1)) + MIN_AGE);
  console.log(`Teddy is ${age} years old!`);
}
