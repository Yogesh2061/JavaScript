var batti = document.querySelector("#bulb");
var btn = document.querySelector("button");

var flag = 0

btn.addEventListener("click", function () {
  if (flag == 0) {
    batti.style.backgroundColor = "yellow"
    btn.innerHTML = "OFF"
    console.log("clicked")
    flag = 1
  } else {
    batti.style.backgroundColor = "transparent"
    btn.innerHTML = "ON"

    console.log("clicked Again")
    flag = 0
  }
})
