/*10. Napisati program koji će neki prirodni broj A (A > 100000), te kreirati i ispisati broj B koji će se 
sastojati od cifara broja A u obrnutom redoslijedu u kojem je svaka parna cifra uklonjena. 
(npr. ako se unese 45362792 funkcija će vratiti 9735). 
Ispisati brojeve A i B i razliku tih brojeva.*/

let num1 = 45362792;
let num2 = num1.toString().split("").reverse();
let numB = [];
let numC;
for (let i = 0; i < num2.length; i++) {
  if (num2[i] % 2 != 0) {
    numB.push(num2[i]);
    numC = numB.join("");
  }
  var diff = num1 - numC;
}
console.log(`Broj A: ${num1}`);
console.log(`Broj B: ${numC}`);
console.log(`Razlika brojeva A i B: ${diff}`);
