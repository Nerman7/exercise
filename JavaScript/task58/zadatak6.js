function checkMe(list) {
  let firstHalfSum = 0;
  let secondHalfSum = 0;

  const half = Math.ceil(list.length / 2);

  const firstHalf = list.slice(0, half);
  const secondHalf = list.slice(-half);

  for (let i = 0; i < firstHalf.length; i++) {
    firstHalfSum += firstHalf[i];
  }

  for (let i = 0; i < secondHalf.length; i++) {
    secondHalfSum += secondHalf[i];
  }

  if (firstHalfSum > secondHalfSum) {
    list = firstHalf.concat(firstHalf);
  } else {
    list = secondHalf.concat(secondHalf);
  }
  console.log(list);
}

checkMe([4, 5, 6, 1, 2, 44]);
