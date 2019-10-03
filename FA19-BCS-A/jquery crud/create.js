$(function() {
  $("#createForm").submit(handleFormSubmit);
});

function handleFormSubmit(event) {
  console.log(event);
  event.preventDefault();
  console.log("serialized form");
  console.log($("#createForm").serialize());
  var title = $("#title").val();
  //alert("form submitted");
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "POST",
    data: $("#createForm").serialize(),
    success: handleResponse
  });
  console.log("Request Sent");
}

function handleResponse(data, respose) {
  console.log("Response received");
  console.log(data);
}
