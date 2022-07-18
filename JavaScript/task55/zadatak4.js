/*4.Napisati program koji generise specijalan niz duzine 10 i popunjava nasumicnim brojevima. 
Kod ovog niza brojevi na parnim indexima moraju biti parni, 
a na neparnim indexima brojevi moraju biti neparni.*/

var arr = [];
let num = 0;

for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    num = Math.floor(10 + Math.random() * 30);
    if (num % 2 != 0) {
      num += 1;
    }
  }

  if (i % 2 != 0) {
    num = Math.floor(10 + Math.random() * 30);
    if (num % 2 == 0) {
      num = num - 1;
    }
  }

  arr.push(num);
}
console.log(arr);
