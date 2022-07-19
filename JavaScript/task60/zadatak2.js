function volumeOfBox(size) {
  let volume = size.width * size.height * size.length;
  return volume;
}

console.log(volumeOfBox({ width: 4, length: 2, height: 2 }));
