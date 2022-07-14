/*4. Napisati program koji ce izbrojati koliko puta se karakter ‘a’ ponavlja u stringu:
‘Java is to JavaScript what car is to Carpet.’. Nakon sto program prebroji,
ispisuje koliko puta se karakter 'a' pojavio u stringu.*/

let mojString = "Java is to JavaScript what car is to Carpet";
let brojPonavljanja = 0;
let slovo = "a";

for (let i = 0; i < mojString.length; i++) {
  if (mojString.charAt(i) == slovo) {
    brojPonavljanja++;
    console.log(`Slovo a se nalazi na indexima ${i}.`);
  }
}
console.log(
  `Slovo a se nalazi ${brojPonavljanja} puta u stringu ${mojString}.`
);
