/*6.Napisati program koji sabira nasumicne brojeve sve dok suma ne predje
1000. Zatim ispisati koliko je bilo parnih a koliko neparnih brojeva i
ukupnu sumu. Nasumicne brojeve generisati izmedju 10 i 100.*/

let min = 10;
let max = 101;
let suma = 0;
let ukupnoParnih = 0;
let ukupnoNeparnih = 0;

while (suma <= 1000) {
  let nasumicniBrojevi = Math.floor(min + Math.random() * (max - min));
  suma = suma + nasumicniBrojevi;
  if (nasumicniBrojevi % 2 == 0) {
    ukupnoParnih = ukupnoParnih + 1;
  } else {
    ukupnoNeparnih = ukupnoNeparnih + 1;
  }
}
console.log("Parnih brojeva  bilo je " + ukupnoParnih + ".");
console.log("Neparnih brojeva  bilo je " + ukupnoNeparnih + ".");
console.log("Ukupna suma je " + suma + ".");
