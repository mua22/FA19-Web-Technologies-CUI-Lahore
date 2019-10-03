$(bindings);
// window.onload = bindings;

function bindings() {
  $("#createForm").submit(handleFormSubmit);
  console.log("bindings done");
}

function handleFormSubmit(event) {
  event.preventDefault();
  //alert("Form submitted");
  console.log("sending ajax post");
  var data = { title: $("#title").val(), body: "noman", userId: 50 };
  console.log(data);
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "POST",
    data: $("#createForm").serialize(),
    success: handleCreationResponse
  });
  console.log("ajax sent");
}
function handleCreationResponse(data, status) {
  console.log("ajax received");
  console.log(data);
}
