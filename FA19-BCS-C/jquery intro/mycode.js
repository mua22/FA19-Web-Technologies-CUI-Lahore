function bindings() {
  $("#btn").click(animate);
  $("#ajax").click(sendAjax);
}

function sendAjax() {
  console.log("sending ajax");
  $.get("https://jsonplaceholder.typicode.com/todos", ajaxReceived);
  console.log("ajax Sent");
}
function ajaxReceived(data, status) {
  console.log("Ajax Received");
  console.log(data);
  for (var i = 0; i < data.length; i++) {
    $("#result").append("<div class='todo'>TITLE: " + data[i].title + "</div>");
  }
}
window.onload = bindings;

function animate() {
  $("#sample")
    .addClass("redBox")
    .fadeOut("slow");
}
