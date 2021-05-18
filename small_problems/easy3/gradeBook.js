console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"
console.log(getGrade(5, 50, 35));  
console.log(getGrade(0, 0, 0));  
console.log(getGrade(100, 100, 100));  
console.log(getGrade(120, 110, 155));  
console.log(getGrade(-120, -110, -155));  
console.log(getGrade(90, 90, 55));  



function getGrade (num1, num2, num3) {
  let average = ((num1 + num2 + num3) / 3);
  let grade = 'No grade';

  if (average >= 90) {
    grade = 'A';
  } else if (average >= 80 && average <= 90) {
    grade = 'B';
  } else if (average >= 70 && average <= 80) {
    grade = 'C';
  } else if (average >= 60 && average <= 70) {
    grade = 'D';
  } else if (average <= 60) {
    grade = 'F';
  }
  return grade;
}