/* Kreirajte funkciju koja uzima niz fudbalskih klubova sa sljedecim properties: ime,
brojPobjeda, brojPoraza, brojNerjesenih, brojPostignutihGolova,
brojPrimljenihGolova i vraća naziv kluba sa najvećim brojem poena. Ako dvije ekipe
imaju isti broj bodova, vrati se tim sa najvećom gol razlikom.
Za pobjedu tim dobija 3 boda, za poraz dobija 0 bodova i za nerjesenu dobija 1 poen.
Testirati funkciju sa najmanje 5 klubova.*/

function champions(teams) {
  var arr = [];
  var arr1 = [];
  for (var i = 0; i < teams.length; i++) {
    var brojBodova = teams[i].brojPobjeda * 3 + teams[i].brojNerjesenih;
    var golRazlika =
      teams[i].brojPostignutihGolova - teams[i].brojPrimljenihGolova;

    arr.push(brojBodova);
    arr1.push(golRazlika);
  }
  var large = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (large < arr1[i]) {
      large = arr1[i];
    }
  }
  let ind = arr1.indexOf(large);

  var largest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
      largest = arr[i];
    }
  }
  let index = arr.indexOf(largest);

  return `Najvise bodova ima ${teams[index].ime}`;
}

console.log(
  champions([
    {
      ime: "Barcelona",
      brojPobjeda: 22,
      brojPoraza: 1,
      brojNerjesenih: 11,
      brojPostignutihGolova: 22,
      brojPrimljenihGolova: 10,
    },
    {
      ime: "Real",
      brojPobjeda: 2,
      brojPoraza: 6,
      brojNerjesenih: 19,
      brojPostignutihGolova: 20,
      brojPrimljenihGolova: 17,
    },
    {
      ime: "Lyon",
      brojPobjeda: 1,
      brojPoraza: 2,
      brojNerjesenih: 8,
      brojPostignutihGolova: 12,
      brojPrimljenihGolova: 7,
    },
    {
      ime: "Monaco",
      brojPobjeda: 7,
      brojPoraza: 9,
      brojNerjesenih: 4,
      brojPostignutihGolova: 34,
      brojPrimljenihGolova: 6,
    },
    {
      ime: "Betis",
      brojPobjeda: 2,
      brojPoraza: 12,
      brojNerjesenih: 13,
      brojPostignutihGolova: 23,
      brojPrimljenihGolova: 24,
    },
  ])
);
