/*Napisati program koji sabira cifre trocifrenog cijelog broja. 
Trocifren cijeli broj predstaviti varijablom. Nakon sto program sabere cifre ispisati sljedecu poruku.

    Primjer poruke: ‘Zbir cifara broja 235 je 10.’*/

let broj = 376;

let suma = 0;
let broj1 = broj;
while (broj != 0) {
  suma = suma + (broj % 10);
  broj = parseInt(broj / 10);
}
console.log(`Zbir cifara broja ${broj1} je ${suma}.`);
