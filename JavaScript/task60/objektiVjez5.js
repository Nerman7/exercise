/*Create a calculator
importance: 5
Create an object calculator with three methods:

read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.*/

let calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },

  sum() {
    let sum = this.a + this.b;
    return sum;
  },
  mul() {
    let mul = this.a * this.b;
    return mul;
  },
};

calculator.read(2, 4);
console.log(calculator.sum());
console.log(calculator.mul());
