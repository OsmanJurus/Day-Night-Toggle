// alert("connected!");

let check = document.querySelector("#check");
let box = document.querySelector(".box");
let ball = document.querySelector(".ball");
// let body = document.querySelector(".body");

check.addEventListener("change", function () {
  if (check.checked === true) {
    box.setAttribute("style","background-color: white");
    ball.setAttribute("style", "transform: translatex(100%);");
  document.body.setAttribute("style","background-color: black; color: white");
  }

  if (check.checked === false) {
    box.setAttribute("style","background-color: black");
    ball.setAttribute("style", "transform:transilatex(10%);");
    document.body.setAttribute("style","background-color: white; color: black");
  }
});
