let a;
let start = function () {
  a = setTimeout(function () {
    console.log("usman");
  }, 2000);
};

let stop = function () {
  clearTimeout(a);
};

document.querySelector("#start").addEventListener("click", start);
document.getElementById("stop").addEventListener("click", stop);
