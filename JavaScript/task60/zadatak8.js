/*Write a function that returns true if a hash contains the specified key, and false otherwise.

Examples
hasKey({ a: 44, b: 45, c: 46 }, "d") ➞ false

hasKey({ craves: true, midnight: true, snack: true }, "morning") ➞ false

hasKey({ pot: 1, tot: 2, not: 3 }, "not") ➞ true*/

function hasKey(obj, key) {
  let kljucevi = Object.keys(obj);

  for (let i = 0; i < kljucevi.length; i++) {
    if (kljucevi[i] !== key) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(hasKey({ a: 44, b: 45, c: 46 }, "b"));
