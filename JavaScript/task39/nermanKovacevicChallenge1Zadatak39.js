/*Napisati program koji na osnovu iznosa racuna koji se treba uplatiti kao i procenat 
tog racuna kojeg želimo platiti kao napojnicu izračunava ukupan račun i napojnicu. 
Iznos racuna i procenat tog racuna kojeg zelimo platiti kao napojnicu predstaviti varijablma. 
Nakon sto program izracuna napojnicu i ukupan racun ispisuje sljedecu poruku.

Primjer poruke: ‘Za racun od 74KM i napojnicu od 14.5%, iznos napojnice je 10.73KM a 
ukupan iznos racuna je 84.73KM.’*/

let racun = 56;
let procenat = 18;

let napojnica = (racun * procenat) / 100;
let ukupanRacun = racun + napojnica;

console.log(
  `Za racun od ${racun}KM i napojnicu od ${procenat}%, iznos napojnice je ${napojnica}KM a ukupan iznos racuna je ${ukupanRacun}KM.`
);
