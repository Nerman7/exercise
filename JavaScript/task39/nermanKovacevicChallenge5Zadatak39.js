/*Napisati program koji ispisuje 3 proizvoljna cijela broja u rastućem redoslijedu. 
3 cijela broja predstaviti varijablama. U zavisnosti od ovih brojeva ispisati sljedecu poruku.

    Primjer poruke: ‘Tri cijela broja: 4, 1 i 3 u rastucem obliku izgledaju ovako: 1 3 4.’*/

let broj1 = 44;
let broj2 = 65;
let broj3 = 15;
let srednjiBroj;

let najveciBroj = Math.max(broj1, broj2, broj3);
let najmanjiBroj = Math.min(broj1, broj2, broj3);

if (broj1 != najmanjiBroj && broj1 != najveciBroj) {
  srednjiBroj = broj1;
  console.log(
    `Tri cijela broja: ${broj1}, ${broj2} i ${broj3} u rastucem obliku izgledaju ovako: ${najmanjiBroj} ${srednjiBroj} ${najveciBroj}.`
  );
} else if (broj2 != najmanjiBroj && broj2 != najveciBroj) {
  srednjiBroj = broj2;
  console.log(
    `Tri cijela broja: ${broj1}, ${broj2} i ${broj3} u rastucem obliku izgledaju ovako: ${najmanjiBroj} ${srednjiBroj} ${najveciBroj}.`
  );
} else if (broj3 != najmanjiBroj && broj3 != najveciBroj) {
  srednjiBroj = broj3;
  console.log(
    `Tri cijela broja: ${broj1}, ${broj2} i ${broj3} u rastucem obliku izgledaju ovako: ${najmanjiBroj} ${srednjiBroj} ${najveciBroj}.`
  );
}
