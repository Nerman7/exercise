/*Ovo je izazov za obrnuto kodiranje. Kreirajte funkciju koja daje ispravan niz iz inputa.
Koristite sljedeće primjere da razbijete kod.
decode("hello") ➞ [5, 2, 9, 9, 3]
decode("wonderful") ➞ [11, 3, 2, 1, 2, 6, 3, 9, 9]
decode("something challenging") ➞ [7, 3, 10, 2, 8, 5, 6, 2, 4, 5,
18, 5, 16, 9, 9, 2, 2, 4, 6, 2, 4]*/

function decode(string) {
  let niz1 = "defghijklmwxyzqabc";
  let niz2 = "nop rstuv";
  let arr = [];
  for (let i = 0; i < string.length; i++) {
    if (niz1.includes(string[i])) {
      arr.push(niz1.indexOf(string[i]) + 1);
    }
    if (niz2.includes(string[i])) {
      arr.push(niz2.indexOf(string[i]) + 2);
    }
  }
  return arr;
}

console.log(decode("hello"));
