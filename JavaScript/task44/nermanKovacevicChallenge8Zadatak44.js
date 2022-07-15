/*8. Napisati program koji uklanja sve samoglasnike iz stringa ‘Make it work, make it right, make it fast.’. 
Nakon sto program ukloni sve samoglasnike ispisati string u konzolu.*/

let fullString = ["Make it work, make it right, make it fast."];
mixString = fullString.map((x) => x.replace(/[aeiou]/g, ""));
console.log(mixString);
