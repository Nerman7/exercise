/*Napisati funkciju koja dijeli niz u manje dijelove. 
Funkcija treba da prima dva argumenta, niz i broj u koliko dijelova trebamo podijeliti taj niz.
Primjer:
Recimo da se funkcija zove divide, poziv funkcije bi bio divide([1, 2, 3, 4, 5, 6, 7], 3); 
funkcija ce vratiti 2D niz koji izgleda ovako: [ [1, 2, 3 ], [4, 5, 6], [7] ].*/

const chunkArray = (arr, size) =>
  arr.length > size
    ? [arr.slice(0, size), ...chunkArray(arr.slice(size), size)]
    : [arr];

    console.log(chunkArray([1,2,3,4,5,6,], 2));