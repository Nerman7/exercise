/*5. Napisati program koji za proizvoljnu rijec provjerava da li je rijec isogram(izogram). 
Rijec je isogram ukoliko sve svako slovo nalazi samo jednom u rijeci. 
Npr: rijec “lovac” je isogram jer nema slova koja se ponavljanju, 
ali rijec “baklava” nije.*/

function isIsogram(str) {
  var word = str.split("");
  for (var i = 0, j = 1; i < word.length - 1; i++, j++) {
    if (word[i] == word[j]) {
      console.log("Not");
      return false;
    }
  }
  console.log("Isogram");
  return true;
}

isIsogram("tito");
