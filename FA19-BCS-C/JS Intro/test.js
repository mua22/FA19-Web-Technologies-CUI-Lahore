console.log("Hello Class");

function bindings() {
  var btn = document.getElementById("btn");
  btn.onclick = handleClick;
  //no error here
}
//binding here would give error
window.onload = bindings;

function handleClick() {
  console.log("Click handled");
  var headingTag = document.getElementById("heading");
  var para = document.getElementById("para");
  headingTag.innerHTML = "wow";
  para.classList.remove("orange");
  para.classList.add("aqua");
}
