console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"

function dms(num) {
  let degrees = 0;
  let minutes = 0;
  let seconds = 0;

  if (num > 0) {
    degrees = Math.floor(num);
    if (degrees > 0) {
      minutes = Math.floor((num % degrees) * 60);
      if (minutes > 0) {
        seconds = Math.floor((((num % degrees) * 60) % minutes) * 60);
      }
    }
  }
  
  return `${degrees}°${numberToTwoDigitString(minutes)}'${numberToTwoDigitString(seconds)}"`
}

function roundUp(num, precision) {
  precision = Math.pow(10, precision);
  return Math.ceil(num * precision) / precision;
}

function numberToTwoDigitString(num) {
  if (num.toString().length < 2) {
    return ('0' + num.toString());
  } else {
    return num.toString();
  }
}