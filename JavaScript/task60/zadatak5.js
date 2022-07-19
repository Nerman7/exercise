/*Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.

Inputs	Outputs
1	"circle"
2	"semi-circle"
3	"triangle"
4	"square"
5	"pentagon"
6	"hexagon"
7	"heptagon"
8	"octagon"
9	"nonagon"
10	"decagon"
Examples
nSidedShape(3) ➞ "triangle"

nSidedShape(1) ➞ "circle"

nSidedShape(9) ➞ "nonagon"
Notes
There won't be any tests with a number below 1 or greater than 10.
Return the output in lowercase.
The challenge is intended to be completed without conditionals (it would take too long)!*/

function shape(num) {
  let obj = {
    1: "circle",
    2: "semi-circle",
    3: "triangle",
    4: "square",
    5: "pentagon",
    6: "hexagon",
    7: "heptagon",
    8: "octagon",
    9: "nonagon",
    10: "decagon",
  };

  let keys = Object.keys(obj);
  let values = Object.values(obj);

  for (let i = 1; i < keys.length; i++) {
    if (num == keys[i]) {
      return values[i];
    }
  }
}

console.log(shape(10));
