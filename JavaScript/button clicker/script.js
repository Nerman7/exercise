let kocka = document.getElementById("kocka");
let btn = document.querySelector("button");
let showColor = document.getElementById("showColor");

let boje = ["red", "blue", "green", "black", "pink"];

btn.addEventListener("click", function () {
  let index = Math.floor(Math.random() * boje.length);
  kocka.style.backgroundColor = boje[index];
  showColor.innerHTML = "This color is " + boje[index];
});
