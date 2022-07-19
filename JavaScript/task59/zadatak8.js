/*Kreirajte funkciju koja prihvaća string, provjerava da li je to važeća mail adresa i
vraća true ili false, ovisno o validaciji.
- String mora sadržavati znak @.
- String mora sadržavati . karakter.
- Ispred @ mora postojati najmanje jedan karakter npr. "j@gmail.com" je važeći dok
je "@gmail.com" nevažeći.
- . i @ mora biti na odgovarajućim mjestima. npr. "hello.email@com" je nevažeći dok
je "john.smith@email.com" važeći.
Ako string prođe ove testove, smatra se važećom mail adresom.*/

function checkCrazyA(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "@") return true;
  }
  return false;
}

function checkDot(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == ".") return true;
  }
  return false;
}

function checkPositionOfCrazyA(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[0] != "@") return true;
  }
  return false;
}

function checkCrazyAandDot(str) {
  let arr = str.toString().split("");
  for (let i = 0; i < str.length; i++) {
    if (
      str.indexOf(".") > str.indexOf("@") ||
      str.indexOf("@") < str.lastIndexOf(".")
    )
      return true;
  }
  return false;
}

function checkEmail(str) {
  if (
    checkCrazyA(str) &&
    checkDot(str) &&
    checkPositionOfCrazyA(str) &&
    checkCrazyAandDot(str)
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(checkEmail("johnsm.ith@email.com"));
