let showNum = document.getElementById("showNum");
let decrease = document.getElementById("decrease");
let reset = document.getElementById("reset");
let increase = document.getElementById("increase");

let sum1 = 0;

decrease.addEventListener("click", function () {
  showNum.innerHTML = --sum1;
});
reset.addEventListener("click", function () {
  showNum.innerHTML = sum1 = 0;
});

increase.addEventListener("click", function () {
  showNum.innerHTML = ++sum1;
});
