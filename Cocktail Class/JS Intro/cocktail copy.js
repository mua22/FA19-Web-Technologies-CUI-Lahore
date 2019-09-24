console.log("Party started");

function handleClick() {
  console.log("Inside handle click");
  var result = document.getElementById("result");
  console.log(result.tagName);
  result.innerHTML = "<p class='orange'>New paragraph</p>";
  var divs = document.getElementsByTagName("DIV");
  console.log(divs);
}
window.onload = handleBindings;

function handleBindings() {
  var btn = document.getElementById("btnShowParagraph");
  btn.onclick = handleClick;
}
