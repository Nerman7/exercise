/*Napisati program koji ispituje da li je cijeli broj paran ili neparan. 
Cijeli broj predstaviti varijablom. U zavisnosti od toga da li je broj paran ili neparan 
ispisati jednu od sljedecih poruka.

    Primjer poruke ako je broj paran: ‘Broj 12 je paran.’
    Primjer poruke ako je broj neparan: ‘Broj 23 je neparan.’*/

let broj1 = 132;

if (broj1 % 2 == 0) {
  console.log(`Broj ${broj1} je paran.`);
} else {
  console.log(`Broj ${broj1} nije paran.`);
}
