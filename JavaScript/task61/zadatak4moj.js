/*Napišite funkciju koja kreira najveci broj od njegovih cifara.
maxPossible(325) ➞ 532
maxPossible(1934) ➞ 9431
maxPossible(9174) ➞ 9741*/

function maxPossible(num) {
  let newNum = num.toString().split("");
  let arr = [];
  arr.push(newNum);
  let newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (num[i] < num[i + 1]) {
      var temp = num[i];
      num[i] = num[i + 1];
      num[i + 1] = temp;
      newArr.push(num[i]);
    }
  }
  return newArr.push(temp[i]);
}
console.log(maxPossible(123));
