/*Create a function that will return an integer number corresponding to the amount of digits in the given integer num.

Examples
num_of_digits(1000) ➞ 4

num_of_digits(12) ➞ 2

num_of_digits(1305981031) ➞ 10

num_of_digits(0) ➞ 1
Notes
Try to solve this challenge without using strings!*/

function num_of_digits(num) {
  let counter = 0;
  if (num % 2 > 0) {
    counter++;
  }
  return counter;
}

console.log(num_of_digits(122));
