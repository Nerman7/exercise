/*4. Napisati program koji na osnovu broja minuta (npr. 1 milijardu)
ispisuje koliko je to u godinama i danima. Zbog jednostavnosti,
pretpostavimo da godina ima 365 dana. Broj minuta predstaviti
varijablom. Nakon sto program izracuna koliko je to vremena u godinama i
danima ispisati sljedecu poruku:

Primjer poruke: ‘1000000000 minuta je otprilike 1902 godine i 214 dana.’*/

let minute = 55000000;
let godina1 = (minute / 525600);
let godina = Math.floor(godina1);
let dan1 = (minute / 60 / 24 ) % 365;
let dan = Math.floor(dan1);

console.log(`${minute} minuta je otprilike ${godina} godine i ${dan} dana.`);
