/*9. Napisati program koji simulira bacanje 3 kockice 
(jedna kockica ima 6 strana i na tim stranama su brojevi 1 - 6). Simulirati konstantno bacanje
 sve tri kockice dok se u dva uzastopna bacanja ne desi da se dobiju isti brojevi na sve tri kockice (npr. u šestom bacanju se dobiju brojevi 2, 2, 2 a u sedmom 4,4,4 na sve tri kockice). 
Ispisati koliko je ukupno bilo bacanja dok se nije ispunio navedeni uslov.*/

let cubePageNumber = 6;
var state = 0;

var i = 0;
while (true) {
  if (state == 2) break;
  let cube1 = Math.floor(Math.random() * cubePageNumber) + 1;
  let cube2 = Math.floor(Math.random() * cubePageNumber) + 1;
  let cube3 = Math.floor(Math.random() * cubePageNumber) + 1;

  if (cube1 == cube2 && cube2 == cube3) {
    state++;
  } else {
    state = 0;
  }
  i++;
}

console.log("Ukupno bacanja: " + i);
