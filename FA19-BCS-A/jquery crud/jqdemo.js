$(bindings);

function bindings() {
  console.log("Doing bindings");
  $("#btn").click(sendAjax);
}

function sendAjax() {
  console.log("Sending Ajax");
  $.get("https://jsonplaceholder.typicode.com/todos", handleResponse);
  console.log("Ajax Sent");
}
function handleResponse(data, status) {
  console.log("response received");
  console.log(data);
  $("#result").html("");
  for (var i = 0; i < data.length; i++) {
    $("#result").append(
      "<p class='todo'><button class='btn btn-danger'>Delete </button>" +
        data[i].title +
        "</p>"
    );
  }
}
