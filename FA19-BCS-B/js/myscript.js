function hello() {
  alert("hello class");
}

window.onload = function() {
  var pa = document.getElementById("para");
  pa.onclick = changeBackground;
};
console.log("Page is being loaded");

function changeBackground() {
  var pa = document.getElementById("para");
  pa.classList.remove("blue");
  pa.classList.add("green");
}
