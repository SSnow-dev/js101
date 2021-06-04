const MONTHS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2

function fridayThe13ths(year) {
  let unluckyFridays = 0;
  MONTHS.forEach(month => {
    let firstDay = new Date(year, month, 13);
    if (firstDay.getDay() === 5) {
      unluckyFridays++;
    }
  })
  return unluckyFridays;
}

