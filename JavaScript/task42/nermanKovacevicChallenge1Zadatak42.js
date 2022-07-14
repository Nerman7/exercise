/*1.Napisati program koji broji karaktere u stringu: 'Before software can be
reusable it first has to be usable.'. Nakon sto program prebroji
karaktere, ispisuje koliko je karaktera u stringu.*/

let nasString = "Before software can be reusable it first has to be usable.";

for (i = 0; i < nasString.length; i++) {
  console.log(nasString[i], i);
}
console.log(`U stringu se nalazi ${i} karaktera.`);
