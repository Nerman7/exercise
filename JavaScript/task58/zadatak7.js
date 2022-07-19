let string = "";

function pattern(rows, col, sign) {
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < rows; j++) {
      if (i === 0 || i === col - 1) {
        string += sign;
      } else {
        if (j === 0 || j === rows - 1) {
          string += sign;
        } else {
          string += " ";
        }
      }
    }
    string += "\n";
  }
  console.log(string);
}
pattern(10, 3, "#");
