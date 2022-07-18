/*Napisati funkciju koja se simulira jednostavan kalkulator. 
Funkcija prima 3 argumenta, jedan broj, znak operacije i drugi broj.
Primjer:
Recimo da se funkcija zove calc, poziv funkcije bi izgledao ovako: calc(3, ‘+’, 4) 
a rezultat bi bio 7. Funkcija treba da radi za: +, -, * i /.*/

function calc(a, b, c) {
  switch (b) {
    case "+":
      return a + c;
      break;
    case "-":
      return a - c;
      break;
    case "*":
      return a * c;
      break;
    case "/":
      return a / c;
      break;
  }
}

console.log(calc(2, "/", 4));
