/*Napisati funkciju koja provjerava jednakost dva objekta. Dva objekta su jednaka
ukoliko su vrijednosti svih propertija oba objekta jednake.*/

function isObjEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

console.log(
  isObjEqual(
    {
      ime: "Barcelona",
      brojPobjeda: 2,
      brojPoraza: 1,
      brojNerjesenih: 11,
      brojPostignutihGolova: 22,
      brojPrimljenihGolova: 10,
    },
    {
      ime: "Barcelona",
      brojPobjeda: 2,
      brojPoraza: 1,
      brojNerjesenih: 11,
      brojPostignutihGolova: 22,
      brojPrimljenihGolova: 10,
    }
  )
);
