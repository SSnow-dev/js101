for (let i = 1; i < 100; i++) {
  if (i % 2 === 0) {
    message(i);
  }
}

function message(string) {
  console.log("===> " + string);
}