function Zaposlen(ime, prezime, zanimanje) {
  this.ime = ime;
  this.prezime = prezime;
  this.zanimanje = zanimanje;
  this.prikaziZanimanje = function () {
    alert(this.zanimanje);
  };
}

var stalniZaposlen = new Zaposlen("Stalni", "Zaposlen", "Programer");

console.log(stalniZaposlen);
