/*Napisati funkciju koja vraca apsolutnu vrijednost nekog broja. NE Koristiti Math.abs().
Primjer:
Ako funkciji proslijedimo - 20 vratit ce nam 20.*/

function absolute(num) {
  if (num < 0) {
    return -num;
  } else return num;
}
console.log(absolute(20));
