/*Napisati funkciju koja prima 2 argumenta, string i karakter koji treba
ukloniti iz datog stringa. Nakon poziva, funkcija treba da vrati novi
string koji predstavlja orginalni string sa izuzetkom prosljedjenog
karaktera.
Primjer poziva funkcije: ukloniKarakter("Dobrodosli", "o");
Primjer ispisa programa: Dbrdsli*/

let string;
let counter = 0;
let newString = "";

function removeChar(str1, str2) {
  string = str1.toString();
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) != str2) {
      newString += string[i];
    }
  }
  console.log(newString);
  return newString;
}
removeChar("Danas je lijep dan.", "D");
