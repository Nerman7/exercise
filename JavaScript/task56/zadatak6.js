let rand;
let sum = 0;

function time() {
  for (let i = 0; i < 10; i++) {
    rand = Math.floor(60000 + Math.random() * (120000 - 60000));

    sum += rand;

    var min = sum / 60000 / 10;
    var minX = Math.floor(min);
    var sec = rand % 60000;
    var secx = sec / 1000;
  }

  console.log(`Auto predje krug za ${minX}:${secx} minuta`);
}

time();
