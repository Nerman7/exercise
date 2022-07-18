/*Napisati funkciju koja prima broj minuta, a zatim vraca koliko je to u sekundama. Funkcija prima cijele kao i decimalne brojeve.
Primjer:
Funkciji proslijedimo 1,5 za broj minuta i funkcija nam vraca 90 sekundi.*/

function secondsToTime(secs) {
  var h = Math.floor(secs / (60 * 60));

  var divisor_for_minutes = secs % (60 * 60);
  var m = Math.floor(divisor_for_minutes / 60);

  var divisor_for_seconds = divisor_for_minutes % 60;
  var s = Math.ceil(divisor_for_seconds);

  return `${h ? `${h}:` : ""}${m ? `${m}:${s}` : `${s}s`}`;
}

console.log(secondsToTime(467));
