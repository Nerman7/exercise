function odOrEv(value) {
  let sum = 0;

  while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
  }
  if (sum % 2 == 0) {
    return 'Sum is even.';
  } else {
    return 'Sum is odd.';
  }
}

console.log(odOrEv(12431));
