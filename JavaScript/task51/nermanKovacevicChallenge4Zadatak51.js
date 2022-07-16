/*Napisati funkciju koja vraća ukupan broj riječi u rečenici.

Primjer poziva funkcije: brojRijeci("Ja mrzim proste brojeve u svim njihovim oblicima");
Primjer ispisa programa: Unijeta rečenica se sastoji od 8 riječi.*/

let str = "";
let wordCount = 1;

function numOfWords(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === " ") {
      wordCount += 1;
    }
  }
  console.log(`Unijeta recenica se sastoji od ${wordCount} rijeci.`);
  return wordCount;
}

numOfWords("Danas je hladno i oblacno.");
