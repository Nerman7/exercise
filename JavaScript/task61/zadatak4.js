/*Napišite funkciju koja kreira najveci broj od njegovih cifara.
maxPossible(325) ➞ 532
maxPossible(1934) ➞ 9431
maxPossible(9174) ➞ 9741*/

function maxPossible(num) {
  let newNum = num.toString().split("");

  for (let i = 0; i < newNum.length; i++) {
    for (let j = 0; j < newNum.length; j++) {
      if (newNum[j] < newNum[j + 1]) {
        let temp = newNum[j];
        newNum[j] = newNum[j + 1];
        newNum[j + 1] = temp;
      }
    }
  }
  return Number(newNum.join(""));
}

console.log(maxPossible(325));
