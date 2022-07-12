/* 1. Napisati program koji na osnovu radiusa(r) i visine(H) cilindra racuna
njegovu povrsinu i zapreminu koristeći se sljedecim formulama:
P = 2 * r * r * π + H * 2 * r * π
V = r * r * π * H

Radius i visinu cilindra predstaviti varijablama, te uzeti proizvoljne
vrijednosti. Nakon sto program izracuna povrsinu i zapreminu treba da
ispise sljedecu poruku:

Primjer poruke: ‘Za cilindar radiusa 5.5 i visine 12 povrsina iznosi 604.757 a zapremina 1140.398.’*/

const PI = 3.14159265;
let r = 10;
let H = 13;

let povrsina1 = 2 * r * r * PI + H * 2 * r * PI;
let povrsina = povrsina1.toFixed(3);
let zapremina1 = r * r * PI * H;
let zapremina = zapremina1.toFixed(3);

console.log(
  `Za cilindar radiusa ${r} i visine ${H} povrsina iznosi ${povrsina} a zapremina ${zapremina}.`
);
