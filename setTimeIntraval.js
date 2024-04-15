let a;
let start = function () {
  a = setInterval(function () {
    console.log("usman");
  }, 2000);
};
let End = function () {
  clearInterval(a);
};
document.querySelector(".start").addEventListener("click", start);
document.querySelector(".end").addEventListener("click", End);
