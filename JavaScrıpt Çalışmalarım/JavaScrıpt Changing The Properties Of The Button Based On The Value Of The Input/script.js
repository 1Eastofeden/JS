
// button
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");

// input
const width = document.querySelector("#width");
const height = document.querySelector("#height");
const color = document.querySelector("#color");

// addEventListener
btn2.addEventListener("click", function () {
  if (!isNaN(width.value)) {
    btn1.style.width = `${width.value}px`;
  }
  if (!isNaN(height.value)) {
    btn1.style.height = `${height.value}px`;
  }
  if (color.value) {
    btn1.style.backgroundColor = color.value;
  }
});
