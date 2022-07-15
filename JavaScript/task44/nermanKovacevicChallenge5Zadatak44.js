/*5. Napisati program koji ce kreirati niz od 20 elemenata, popunjen nasumicnim brojevima od 1 do 100. 
Zatim, program kreira novi niz, koji ima sve elemente kao i prvi niz ali obrnut redoslijed. 
Ako je prvi niz [12, 24, 7], drugi niz ce biti [7, 24, 12].*/

let arr = [];
let revArr = [];

for (let i = 0; i < 20; i++) {
  let num = Math.floor(1 + Math.random() * (100 - 1));
  arr.push(num);
}
for (let i = arr.length - 1; i >= 0; i--) {
  revArr.push(arr[i]);
}
console.log("Pravilan niz je: " + arr);
console.log("Obrnuti niz je: " + revArr);
