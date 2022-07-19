let rand;
let arr = [];

function sorto() {
  for (let i = 0; i < 10; i++) {
    rand = Math.floor(10 + Math.random() * (100 - 10));
    arr.push(rand);
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] > arr[j + 1]) {
          let tmp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tmp;
        }
      }
    }
  }
  console.log(arr);
}
sorto();
