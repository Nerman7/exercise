/*4. Napisati program koji simulira dijeljenje 6 karata korisniku iz spila. 
Spil ukupno ima 52 karte, ‘A’, ‘1’, ’2’, ’3’, ’4’, ’5’, ’6’, ’7’, ’8’, ’9’, ’10’, ’J’, ’Q’, ’K’ u cetiri znaka ‘List’,’Srce’, ‘Kocka’ i ‘Mak’. 
Ispisati podjeljene karte.*/

let typeCards = ["List", "Srce", "Kocka", "Mak"];
let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let allCards = [];

for (let i = 0; i < 4; i++) {
  for (let k = 0; k < 13; k++) {
    allCards.push(cards[k] + typeCards[i]);
  }
}
for (let i = 1; i <= 6; i++) {
  let sixCards = allCards[Math.floor(Math.random() * allCards.length)];

  console.log(sixCards);
}
//console.log(allCards);
