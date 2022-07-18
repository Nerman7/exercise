/*Napisati rekurzivnu funkciju koja racuna faktorijel nekog broja. 
Primjer faktorijela broja 5 je: 5 * 4 * 3 * 2 * 1 = 120. 
Rekurzivna funkcija je funkcija koja poziva samu sebe.*/

function factoriel(n) {
  if (n == 1 || n == 0) return 1;
  else return n * factoriel(n - 1);
}
console.log(factoriel(4));
