const MINUTES_PER_DAY = 1440;
const MINUTES_PER_HOUR = 60;

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);

function afterMidnight(timeString) {
  timeArray = timeString.split(':');
  let hour = Number(timeArray[0]);
  let minute = Number(timeArray[1]);
  if (hour === 24) {
    return 0;
  }
  if (hour === 0 && minute === 0) {
    return 0;
  }
  return (MINUTES_PER_DAY - ((hour * MINUTES_PER_HOUR) - minute));
}

function beforeMidnight(timeString) {
  timeArray = timeString.split(':');
  let hour = Number(timeArray[0]);
  let minute = Number(timeArray[1]);
  if (hour === 24) {
    return 0;
  }
  if (hour === 0 && minute === 0) {
    return 0;
  }  
  return (MINUTES_PER_DAY - ((hour * MINUTES_PER_HOUR) + minute));
}
