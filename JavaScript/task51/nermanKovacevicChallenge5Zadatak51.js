/*Napisati funkciju koja prima kao argument godinu te vraća da li je ta godina prestupna ili ne.

Primjer poziva funkcije: isPrestupnaGodina(2000);
Primjer ispisa programa: Godina 2000 je prestupna godina.*/
let year;

function isYearLeap(year) {
  if (year % 4 == 0 || (year % 400 == 0 && year % 100 != 0)) {
    console.log(`Godina ${year} je prestupna.`);
    return;
  }
  console.log(`Godina ${year} nije prestupna.`);
  return;
}

isYearLeap(20);
