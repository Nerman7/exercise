/* 2.Napisati program koji na osnovu duzine ivice kocke(a) racuna povrsinu i
zapreminu kocke. Zapremina kocke se racuna po formuli: V = a * a * a.
Površina se racuna po formuli: P = 6 * a * a.

Duzinu ivice kocke  predstaviti varijablom, i uzeti proizvoljnu vrijednost. Nakon sto
program izracuna zapreminu i povrsinu kocke ispisati sljedecu poruku:

Primjer poruke: ‘Za kocku kod koje je duzina ivice 7.5 zapremina iznosi 421,88 a povrsina je 337.5.’*/

let stranica = 9;
let zapremina1 = (stranica * stranica * stranica); // Moze i ovako let zapremina1 = Math.pow(stranica, 3);
let zapremina = zapremina1.toFixed(2);
let povrsina1 = (6 * stranica * stranica);
let povrsina = povrsina1.toFixed(1);

console.log(`Za kocku kod koje je duzina stranice ${stranica} zapremina iznosi ${zapremina} a povrsina je ${povrsina}.`);

