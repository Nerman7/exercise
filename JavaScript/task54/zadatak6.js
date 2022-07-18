/*Napisati funkciju koja prima 2D niz, zatim ga konvertuje u 1D niz. 
Ovaj proces se zove: “flattening an array”, gdje se smanjuje broj dimenzija niza.
Primjer:
2D niz:
1 2 3
4 5 6
7 8 9
Funkcija nam vraca 1D niz: 1 2 3 4 5 6 7 8 9*/

let arr = [];
function flatten(arr) {
  let flatArray = [].concat.apply([], arr);
  return flatArray;
}
console.log(
  flatten([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
