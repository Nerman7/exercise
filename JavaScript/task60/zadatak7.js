/*Given a number and an object with min and max properties, return true if the number lies within the given range (inclusive).

Examples
isInRange(4, { min: 0, max: 5 }) ➞ true

isInRange(4, { min: 4, max: 5 }) ➞ true

isInRange(4, { min: 6, max: 10 }) ➞ false

isInRange(5, { min: 5, max: 5 }) ➞ true
Notes
Numbers can be positive or negative, and they may not be integers.
You can assume min <= max is always true.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutio*/

function isInRange(num, obj) {
  if (num < obj.min) {
    return false;
  }
  if (num > obj.max) {
    return false;
  }
  if (num >= obj.min && num <= obj.max) {
    return true;
  }
}

console.log(isInRange(4, { min: 1, max: 3 }));
