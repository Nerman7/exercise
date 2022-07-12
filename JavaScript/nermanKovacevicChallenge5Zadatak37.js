// Program koji ispisuje ocjenu

let bodovi = 76;

if (bodovi < 0 || bodovi > 100) {
    console.log(`Pogresan unos.`);
} else if (bodovi <= 49) {
    console.log(`Za osvojenih ${bodovi} boda dobili ste ocjenu 5`);
} else if (bodovi <= 59) {
    console.log(`Za osvojenih ${bodovi} boda dobili ste ocjenu 6`);
} else if (bodovi <= 69) {
    console.log(`Za osvojenih ${bodovi} boda dobili ste ocjenu 7`);
} else if (bodovi <= 79 ) {
    console.log(`Za osvojenih ${bodovi} boda dobili ste ocjenu 8`);
} else if (bodovi <= 89) {
    console.log(`Za osvojenih ${bodovi} boda dobili ste ocjenu 9`);
} else if ( bodovi <= 100) {
    console.log(`Za osvojenih ${bodovi} boda dobili ste ocjenu 10`);
}