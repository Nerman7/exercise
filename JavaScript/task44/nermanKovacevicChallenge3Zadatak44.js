/*3. Napisati program koji ce kreirati niz od 20 elemenata, popunjen nasumicnim brojevima od 1 do 100. 
Ispisati ovaj pocetni niz u konzolu. Zatim izmjesati elemente u nizu, te ponovo ispisati niz u konzolu. 
Za mijesanje niza, minimalan broj iteracija je jednak duzini niza.*/

let arr = [];

for (let i = 0; i < 20; i++) {
  let num = Math.floor(1 + Math.random() * (100 - 1));
  arr.push(num);
}
console.log(arr);

let changeArray = arr.sort((a, b) => 0.5 - Math.random());
console.log(changeArray);
