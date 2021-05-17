console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.
console.log(
  greetings(["Super", "Mario"], { title: "Master", occupation: "Plumber" })
);
console.log(
greetings(["Geralt", "of", "Rivia"], { title: "Powerful", occupation: "Witcher" })
);

function greetings(name, job) {
  let greeting = '';
  let fullName = '';
  let occupation = '';
  name.forEach(element => {
    fullName += (' ' + element);
  });
  occupation = job.title + ' ' + job.occupation;
  greeting = `Hello,${fullName}! Nice to have a ${occupation} around.`;
  return greeting;
}