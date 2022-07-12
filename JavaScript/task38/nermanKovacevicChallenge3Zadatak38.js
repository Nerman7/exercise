/*3. Napisati program koji racuna iznos popusta na gotovinsko plaćanje robe i
cijenu te robe sa popustom. Pocetnu cijenu robe i popust u procentima
predstaviti varijablama. Nakon sto program izracuna iznos popusta i
cijenu robe sa popustom ispisati sljedecu poruku:

Primjer poruke: ‘Za robu sa cijenom od 175.5KM i popustom od 12%, 
iznos popusta je 21.06KM a cijena robe sa popustom iznosi 154.44KM.’*/


let pocetnaCijena = 234.5;
let popust = 14;
let iznosPopusta1 = (pocetnaCijena * popust) / 100;
let iznosPopusta = iznosPopusta1.toFixed(2);
let cijenaRobeSaPopustom1 = pocetnaCijena - iznosPopusta;
let cijenaRobeSaPopustom = cijenaRobeSaPopustom1.toFixed(2);

console.log(`Za robu sa cijenom od ${pocetnaCijena} i popustom od ${popust}%, iznos popusta je ${iznosPopusta} KM a cijena robe sa popustom iznosi ${cijenaRobeSaPopustom}KM`);
