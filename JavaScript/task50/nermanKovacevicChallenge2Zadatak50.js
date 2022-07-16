/*2. Napisati funkciju koja prima neki broj te provjerava da li je isti prosti broj.
Napisati test program koji poziva ovu metodu i ispisuje sve proste brojeve u rasponu od 0 do 10.000. 
(VAŽNO: Zadatak nije ispisati prvih 10.000 prostih brojeva nego sve proste brojeve izmedju 0 i 10.000)*/

let num;

function isPrimeNumber(num) {
  if (num < 2) {
    return `${num} nije prost broj.`;
  }
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return `${num} nije prost broj.`;
    }
  }
  return `${num} je prost broj.`;
}

console.log(isPrimeNumber(45));

for (let j = 0; j < 10000; j++) {
  console.log(isPrimeNumber(j));
}
