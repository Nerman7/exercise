function indeksi(arr, num) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] == num) {
      return i;
    }
  }
}
console.log(indeksi([1, 4, 2, 3, 45, 3, 2, 4], 4));
