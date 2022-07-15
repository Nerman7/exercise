/*11. Napisati program koji kreira matricu 4X4, i popunjava ju nasumicnim brojevima od 1 do 20.*/

let arr4X4 = [];
for (var i = 0; i < 4; i++) {
  let ran = Math.floor(Math.random() * 20);
  arr4X4[i] = [];
  for (var j = 0; j < 3; j++) {
    arr4X4[i][j] = ran;
  }
  for (var k = 0; k < 3; k++) {
    arr4X4[i][j] = ran;
  }
  for (var n = 0; n < 3; n++) {
    arr4X4[i][j] = ran;
  }
}
console.log(arr4X4);
