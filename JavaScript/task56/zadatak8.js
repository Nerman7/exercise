var arrMatrix = [];
const matrixDimension = 4;
var sum = 0;

let max = 20;
let min = 1;

for (let i = 0; i < matrixDimension; ++i) {
  var columns = [];
  for (var j = 0; j < matrixDimension; ++j) {
    let difference = max - min;
    var rand = Math.random();
    rand = Math.floor(rand * difference);
    rand = rand + min;
    columns[j] = rand;
  }
  arrMatrix[i] = columns;
}

console.log(arrMatrix);
