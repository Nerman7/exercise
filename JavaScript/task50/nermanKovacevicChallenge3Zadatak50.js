/*Napisati funkciju koja generiše te ispisuje 100 nasumičnih brojeva, 10 brojeva
po liniji. Ispis programa treba da izgleda kao 10x10 matrica nasumičnih
brojeva.*/

let arr = [];

function printRandomNum() {
  for (let i = 0; i < 10; i++) {
    var columns = [];
    for (let j = 0; j < 10; j++) {
      let rand = Math.floor(Math.random() * 100);
      columns[j] = rand;
    }
    arr[i] = columns;
  }
  console.log(arr);
}
printRandomNum();
