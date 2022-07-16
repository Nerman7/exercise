/*Napisati funkciju koja prima tri broja kao parametre te ispisuje ta ista tri broja u rastućem redosljedu.
Primjer poziva funkcije: ispisiSortiraneBrojeve(17, 3, 42);
Primjer ispisa: Sortirani brojevi: 3, 17, 42.*/

let num1, num2, num3;
let biggestNum, middleNum, smallestNum;

function sortNumbers(num1, num2, num3) {
  if (num1 > num2) {
    biggestNum = num1;
    middleNum = num2;
  } else {
    biggestNum = num2;
    middleNum = num1;
  }

  if (num3 > biggestNum) {
    smallestNum = middleNum;
    middleNum = biggestNum;
    biggestNum = num3;
  } else if (num3 > middleNum) {
    smallestNum = middleNum;
    middleNum = num3;
  } else {
    smallestNum = num3;
  }
  console.log(smallestNum, middleNum, biggestNum);
}

sortNumbers(101111, 88, 45);
