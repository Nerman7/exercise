var arr1 = [];
var arr2 = [];
var mix = [];

function find(arr1, arr2) {
  for (let i = 0; i < 10; i++) {
    var rand = Math.floor(10 + Math.random() * (100 - 10));
    arr1.push(rand);
    var rand1 = Math.floor(10 + Math.random() * (100 - 10));
    arr2.push(rand1);
  }

  for (let i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        mix.push(arr1[i]);
      }
    }
  }
  console.log(arr1);
  console.log(arr2);
  return mix;
}
console.log(find(arr1, arr2));
