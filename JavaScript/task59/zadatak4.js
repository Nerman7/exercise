/*Tradicionalni sefovi koriste mehanizam za zaključavanje sa tri pločice zbog
čega kombinacija ima 3 vrijednosti, pri čemu se kombinacija sefa unosi
pomoću točkića na vratima sefa. Brojčanik je označen brojevima u smjeru
kazaljke na satu između 0 i 99. Kombinacija od tri broja se unosi tako što se
prvo okreće udesno (u smjeru kazaljke na satu), zatim ulijevo (u suprotnom
od kazaljke na satu), a zatim ponovo udesno (u smjeru kazaljke na satu).
Brojevi se čitaju sa vrha brojčanika:

S obzirom na početnu (gornju) poziciju točkića i inkremente koji se koriste za
svaki okret točkića, vratite niz koji sadrži kombinaciju sefa.
PRIMJERI:
safecracker(0, [3, 10, 5]) ➞ [97, 7, 2]
- pocetna pozicija je 0
- zatim okrecemo udesno za 3 vrijednosti
- onda okrecemo za 10 vrijednosti u lijevo
- i na kraju ponovo udesno za 5 vrijednosti sto nam na kraju da kombinaciju:
97 7 2.*/

function sef(startingValue, arr) {
  let arr1 = [];
  let sum;

  if (startingValue >= arr[0]) {
    sum = startingValue - arr[0];
    arr1.push(sum);
  } else {
    sum = 100 - arr[0];
    arr1.push(sum);
  }
  if (sum + arr[1] < 100) {
    arr1.push(sum + arr[1]);
  } else {
    sum = sum - 100 + arr[1];
    arr1.push(sum);
  }

  if (sum - arr[2] > 0) {
    sum = sum - arr[2];
    arr1.push(sum);
  } else {
    sum = 100 - niz[2] + arr[1];
    arr1.push(sum);
  }
  return arr1;
}

console.log(sef(10, [3, 10, 5]));
