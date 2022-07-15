/*6. Napisati program koji racuna faktorijel nekog broja n. 
N broj uzeti proizvoljno, izracunati faktorijel zatim ispisati rezultat. 
Faktorijel broje se racuna na sljedeci nacin: faktorijel = n * (n-1)* (n-2)... * 1.*/

let n = 8;
let fact = 1;

for (let i = 1; i <= n; i++) {
  fact = fact * i;
}
console.log(`Faktorijel broja ${n} je ${fact}.`);
