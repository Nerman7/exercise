/* Create a function that moves all capital letters to the front of a word.

Examples
capToFront("hApPy") ➞ "APhpy"

capToFront("moveMENT") ➞ "MENTmove"

capToFront("shOrtCAKE") ➞ "OCAKEshrt"
Notes
Keep the original relative order of the upper and lower case letters the same.*/

function capToFront(string) {
  let upperStr = string.toUpperCase();
  let lowerStr = string.toLowerCase();
  let upperArr = [];
  let lowerArr = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === upperStr[i]) {
      upperArr.push(upperStr[i]);
    }
  }
  for (let i = 0; i < string.length; i++) {
    if (string[i] === lowerStr[i]) {
      lowerArr.push(lowerStr[i]);
    }
  }

  let all = upperArr.concat(lowerArr);
  return all;
}

console.log(capToFront("neFFFFFLLdadraM"));
