const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

function timeOfDay(minutes) {
  if (minutes < 0) {
    minutes = (minutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
  } else {
    minutes = minutes % MINUTES_PER_DAY;
  }

  let timeHours = Math.floor(minutes / MINUTES_PER_HOUR);
  let timeMinutes = minutes % MINUTES_PER_HOUR;

  return `${forceTwoDigit(timeHours)}:${forceTwoDigit(timeMinutes)}`;
}

function forceTwoDigit(num) {
  return num < 10 ? `0${num}` : String(num);
}