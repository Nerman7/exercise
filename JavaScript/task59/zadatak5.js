/*Napisati funkciju koja na osnovu danasnjeg dana vraca koji ce biti dan u
sedmici nakon N dana.
PRIMJERI:
afterNDays(“Monday”, 3) ➞ “Thursday”
afterNDays(“Monday”, 14) ➞ “Monday”*/

function whatDay(day, numOfDayPassed) {
  const d = new Date();
  day = d.getDay();
  var trueday = (numOfDayPassed % 7) + day;

  if (numOfDayPassed < 7) {
    trueday = day + numOfDayPassed;
  }

  switch (trueday - 1) {
    case 0:
      console.log("Monday");
      break;
    case 1:
      console.log("Tuesday");
      break;
    case 2:
      console.log("Wednesday");
      break;
    case 3:
      console.log("Thursday");
      break;
    case 4:
      console.log("Friday");
      break;
    case 5:
      console.log("Saturday");
      break;
    case 6:
      console.log("Sunday");
      break;

    default:
      break;
  }
}

whatDay("Thursday", 5);
