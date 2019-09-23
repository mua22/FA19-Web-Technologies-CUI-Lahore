$(bindings);

function bindings() {
  $("#btnToggle").click(handleToggle);
}

function handleToggle() {
  console.log("handle toggle clicked");
  var para = document.getElementById("para");
  para.classList.remove("blue");
  para.classList.add("orange");
}
