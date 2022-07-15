/*1. Napisati program koji ce kreirati niz od 20 elemenata, popunjen nasumicnim brojevima od 1 do 100. 
Zatim ispisati niz u konzolu.*/

let arr = [];

for (let i = 0; i < 20; i++) {
  let num = Math.floor(1 + Math.random() * (100 - 1));
  arr.push(num);
}
console.log(arr);
