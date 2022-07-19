function percent(num) {
  var arr = [];
  for (let i = 0; i < num; i++) {
    num = Math.floor(1 + Math.random() * (100 - 1));
    arr.push(num);
  }

  var smallest = arr[0];
  let sum = 0;
  let procent = 0.25;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] < smallest) {
      smallest = arr[j];
    }

    if (arr[j] != smallest) {
      let mult = arr[j] * procent;
      sum += mult;
    }
  }

  console.log(smallest);
  smallest = smallest + sum;
  console.log(sum);

  console.log(smallest);
  arr.push(smallest);
  console.log(arr);
}

percent(1);
