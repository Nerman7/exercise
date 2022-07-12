/* 5.Napisati program koji ispituje da li je trocifreni cijeli broj
palindrom. Broj je palindrom ako je isti čitajući s lijeva na desno i s
desna na lijevo. Trocifreni cijeli broj predstaviti varijablom. Nakon
sto program provjeri da li je taj broj palindrom, ispisuje jednu od
sljedecih poruka:

Primjer poruke ako je broj palindrom: ‘Broj 121 je palindrom.’
Primjer poruke ako broj nije palindrom: ‘Broj 123 nije palindrom.’*/


let palindrom = 334433;
let obrnutiPalindrom = palindrom.toString().split('').reverse().join(''); 

if (palindrom == obrnutiPalindrom) {
    console.log(`Broj ${palindrom} je palindrom.`)
} else {
    console.log(`Broj ${palindrom} nije palindrom.`)
}

