/*Napisati funkciju koja
broji karaktere u nekom stringu te vraća korisniku isti kao i broj
suglasnika i samoglasnika u datom stringu.
Primjer poziva funkcije: stringPodaci("Dobrodosli");
Primjer ispisa: String "Dobrodosli" se sastoji od 10 karaktera od cega su 4 samoglasnici i 6 suglasnici.*/

let string;

function stringInfo(nekiString) {
  let numVowels = 0;
  string = nekiString.toString();
  for (let i = 0; i < string.length; i++) {
    if (
      string.charAt(i) == "a" ||
      string.charAt(i) == "e" ||
      string.charAt(i) == "i" ||
      string.charAt(i) == "o" ||
      string.charAt(i) == "u"
    ) {
      numVowels += 1;
    }
  }
  let consonants = string.length - numVowels;
  console.log(
    `String ${nekiString} sastoji se od ${string.length} karaktera od cega su ${numVowels} samoglasnici i ${consonants} samoglasnici.`
  );
}
stringInfo("Ana voli Milovana.");
