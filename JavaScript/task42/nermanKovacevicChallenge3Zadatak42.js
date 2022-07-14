/*3.Napisati program koji simulira bacanje kovanice milion puta te ispisuje
korisniku koliko puta je novčić pao na glavu a koliko puta na pismo.*/

let ukupnoPismo = 0;
let ukupnoGlava = 0;

for (let i = 0; i < 1000000; i++) {
  let bacanjeNovcica = Math.random();
  if (bacanjeNovcica < 0.5) {
    ukupnoPismo = ukupnoPismo + 1;
  } else if (bacanjeNovcica > 0.5) {
    ukupnoGlava = ukupnoGlava + 1;
  }
}
console.log("Ukupno pisma je " + ukupnoPismo + ".");
console.log("Ukupno glava je " + ukupnoGlava + ".");
