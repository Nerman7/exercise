/*Napisati program koji generiše jednodimenzionalni niz od 50 jednocifrenih
brojeva. Nakon što je niz generisan, ispisati broj ponavljanja svakog broja u
nizu.
Primjer niza: 1, 1, 2, 5, 2, 3, 1 …….. 3
Broj 1 se ponavlja: 3 puta
Broj 2 se ponavlja: 2 puta
Broj 3 se ponavlja: 2 puta
Broj 5 se ponavlja: 1 puta*/


let arr = [];

for (let i = 0; i < 50; i++) {
    var rand = Math.floor(Math.random() * 10);
    arr.push(rand);
}

const count = {};

for (const element of arr) {
    if (count[element]) {
        count[element] += 1;
    } else {
        count[element] = 1;
    }
}
console.log(count); 

