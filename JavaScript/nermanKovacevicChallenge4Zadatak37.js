// Program koji racuna BMI

let visina = 1.83;
let tezina = 83;
let bmi = tezina / (visina * visina);

if (bmi < 18.5) {
    console.log(`Za visinu od ${visina}m i tezinu od ${tezina}kg vas BMI je ${bmi.toFixed(1)}. To spada u kategoriju: Pothranjenost.`);
} else if (  bmi <= 25.0 )  {
    console.log(`Za visinu od ${visina}m i tezinu od ${tezina}kg vas BMI je ${bmi.toFixed(1)}. To spada u kategoriju: Normalan BMI.`);
} else if ( bmi <= 30.0 ) {
    console.log(`Za visinu od ${visina}m i tezinu od ${tezina}kg vas BMI je ${bmi.toFixed(1)}. To spada u kategoriju: Gojaznost.`);
} else if ( bmi >= 30.0) {
    console.log(`Za visinu od ${visina}m i tezinu od ${tezina}kg vas BMI je ${bmi.toFixed(1)}. To spada u kategoriju: Pretilost.`);
}




