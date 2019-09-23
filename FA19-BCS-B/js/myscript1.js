function hello() {
  alert("hello class");
}
function doBindings() {
  var pa = document.getElementById("para");
  pa.onclick = changeBackground;
  console.log("page is loaded and bindings done");
}
window.onload = doBindings;
console.log("Page is being loaded");

function changeBackground() {
  var pa = document.getElementById("para");
  pa.classList.remove("blue");
  pa.classList.add("green");
}
