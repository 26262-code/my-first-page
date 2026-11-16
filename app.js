let count = 0;
const btn = document.getElementById("btn");

btn.onclick = function () {
  count = count + 1;
  btn.innerText = "点了 " + count + " 次";
};