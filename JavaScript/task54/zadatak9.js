/*Napsati funkciju koja provjerava da li postoji neki element u nizu. 
Funkcija prima dva parametra, niz koji pretrazujemo i element koji trazimo. 
Funkcija radi za sve tipove podataka.
Primjer: recimo da se funkcija zove find, poziv bi izgledao ovako: 
find([2, 7, 5, 3, 8, 1], 5), funckija ce vratiti boolean true jer broj 5 se nalazi u nizu. 
NE koristiti includes() funkciju.*/

let arr = [];

function searcArr(arr, num) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      return true;
    }
  }
  return false;
}

console.log(searcArr([1, 2, 3, 4, 5, 6], 6));
