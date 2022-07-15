/*12. Napisati
program koji kreira matricu 4X4, i popunjava ju nasumicnim brojevima od
1 do 20. Zatim sabira sve brojeve koje se nalaze na indexima cija suma
je neparan broj. Primjer indexa: 0 i 1, 1 i 3 itd.*/

var arrMatrix = [];
const matrixDimension = 4;
var sum = 0;

let max = 20;
let min = 1;

for (let i = 0; i < matrixDimension; i++) {
  var columns = [];
  for (var j = 0; j < matrixDimension; j++) {
    let difference = max - min;
    var rand = Math.random();
    rand = Math.floor(rand * difference);
    rand = rand + min;
    columns[j] = rand;
  }
  arrMatrix[i] = columns;
}

for (var i = 0; i < arrMatrix.length; ++i) {
  for (var j = 0; j < arrMatrix[i].length; ++j) {
    if ((i + j) % 2 != 0) {
      sum += arrMatrix[i][j];
    }
  }
}
console.log(arrMatrix);
console.log("Ukupna suma u matrici neparnih indexa je: " + sum);
