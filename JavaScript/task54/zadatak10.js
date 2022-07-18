/*Napisati program koji ispisuje ispod prikazani pattern. 
Program treba da pita korisnika od koliko redova se trokut sastoji. 

1  2  3  4  5
    2  3  4  5
        3  4  5
            4  5
                5*/

function leftTriangle(rows) {
  let result = i;
  for (var i = rows; i > 0; i--) {
    if (i === rows) {
      result += "*".repeat(i) + "\n";
    } else {
      let empty = rows - i;
      result += " ".repeat(empty) + "*".repeat(i) + "\n";
    }
  }
  return result;
}

console.log(leftTriangle(5));
