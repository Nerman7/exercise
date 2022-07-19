var A = [];
for (var i = 0; i < 4; i++) {
  A[i] = [];
  for (var j = 0; j < 4; j++) {
    let rand = Math.floor(10 + Math.random() * (100 - 10));
    A[i][j] = rand;
  }
}
console.log(A);
