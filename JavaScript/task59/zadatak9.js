/*Za jednostavan matematički izraz, uredno ga formatirajte kao jednacinu.
PRIMJERI:
formatMath("3 + 4") ➞ "3 + 4 = 7"
formatMath("3 - 2") ➞ "3 - 2 = 1"*/

function formatMath(str) {
  if (str.includes("x")) {
    var newStra = str.replace("x", "*");
  }

  let newStr = eval(newStra);
  return newStr;
}

console.log(formatMath("3 x 4"));
