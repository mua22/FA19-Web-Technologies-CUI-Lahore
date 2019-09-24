$(function() {
  $("#btn").click(sendAjaxRequest);
  console.log("binding");
});
console.log("Main Js Code");
function animate() {
  $("#posts")
    .addClass("hilight")
    .fadeOut("slow");
}

function sendAjaxRequest() {
  console.log("Sending ajax");
  $.get("https://jsonplaceholder.typicode.com/posts", postsReceived);
  console.log("Request Sent");
}

function postsReceived(data, status) {
  console.log("Request Received");
  console.log(status);
  console.log(data);
}
