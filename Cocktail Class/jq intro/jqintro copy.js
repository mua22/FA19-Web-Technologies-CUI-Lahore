window.onload = bindings;
function bindings() {
  // do bindings here
  //   $("#btn").click(handleButtonClick);
  $("#btn").click(animate);
}

function animate() {
  setInterval(handleButtonClick, 50);
}

function handleButtonClick() {
  $("#dummy")
    .addClass("hilight")
    .fadeOut("slow")
    .fadeIn("slow");
}
