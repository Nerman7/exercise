/*Napisati funkciju koja pronalazi broj pronavljanja određenog karaktera u stringu.
Primjer poziva funckije: brojacKaraktera("Dobrodosli", "o")
Primjer ispisa: Karakter o se ponavlja 3 puta u stringu "Dobrodosli".*/

let string;
let counter = 0;
function countString(str1, str2) {
  string = str1.toString();
  string = str1.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) == str2) {
      counter += 1;
    }
  }
  console.log(
    `Karakter ${str2} se ponavlja ${counter} puta u stringu ${str1}.`
  );
}
countString("Mikhail Tal", "t");
