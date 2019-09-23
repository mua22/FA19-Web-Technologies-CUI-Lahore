// alert("Hello");
function bindings() {
  console.log("Inside Bindings");
  var btn = document.getElementById("btnToggle");
  console.log(btn);
  btn.onclick = handleToggle;
}

console.log("After onload binding ");
console.log("Starting JS");

function handleToggle() {
  console.log("handle toggle clicked");
  var para = document.getElementById("para");
  para.classList.remove("blue");
  para.classList.add("orange");
}

window.onload = bindings;
