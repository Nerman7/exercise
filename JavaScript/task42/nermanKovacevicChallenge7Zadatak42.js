/*7.Napisati program koji ispisuje sve brojeve od 1 do 100, ali, za brojeve
koji su djeljivi sa 3 umjesto broja ispisati 'Fizz', za brojeve koji su
djeljivi sa 5 ispisati 'Buzz' a za brojeve koji su djeljivi i sa 3 i sa
5 ispisati 'FizzBuzz'.*/

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}
