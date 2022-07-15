/*7. Napisati program koji će generisati Fibonacci niz i smjestiti ga u jedan niz od 20 elemenata. 
(Fibbonacijev niz je niz brojeva koji počinje brojevima 0 i 1, 
    a svaki sljedeći broj u nizu dobija se zbrajanjem prethodna dva: 
    F(0) = 0, F(1) = 1,F(n) = F(n-1) + F(n-2)). 
    Zatim napraviti funkciju koja će u nizu pronaći sve brojeve koji završavanju parnom cifrom i ukloniti ih iz niza. 
    Uklanjanje elemenata niza obavezno uraditi tako da ne ostaju prazni elementi već da se ostatak niza pomjeri kako ne bi bilo praznih elemenata. 
Pomjeranje ostatka niza obavezno raditi prilikom uklanjanja elemenata.*/

let fibArr = [];
let num1 = 0;
let num2 = 1;
let nextNum;

for (let i = 1; i <= 20; i++) {
  nextNum = num1 + num2;
  num1 = num2;
  num2 = nextNum;
  fibArr.push(nextNum);
}
for (let i = 0; i < fibArr.length; i++) {
  if (fibArr[i] % 2 == 0) {
    delete fibArr[i];
    let finalArray = (a, b) => {
      return a.filter((e) => {
        return e != b;
      });
    };
    console.log(finalArray(fibArr, ""));
  }
}
