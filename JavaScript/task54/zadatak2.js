/*Napisati funkciju koja prima neogranicen broj argumenata 
number tipa podataka te vraca najveci broj. 
Funkcija najmanje mora imati 2 parametra, ali nema gornje granice.
Primjer:
Ako se funkcija zove max, poziv bi izgledao ovako: max(2, 7, 4, 6, 9, 12, 5) a 
funkcija vraca 12.*/

function foo() {
  return Math.max.apply(null, arguments);
}

console.log(foo(34, 67, 34, 12, 3, 99));
