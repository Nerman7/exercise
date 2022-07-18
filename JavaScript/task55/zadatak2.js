/*2. Napisati program koji ce generisat niz duzine 10, 
i popuniti ga unikatnim nasumicnim brojevima od 0 do 10. 
Dakle ne smijemo imati 2 ista broja u nizu.*/

var arr = [];
while (arr.length < 10) {
  var r = Math.floor(Math.random() * 10);
  if (arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);
