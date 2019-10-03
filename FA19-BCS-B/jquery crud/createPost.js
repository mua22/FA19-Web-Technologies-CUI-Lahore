$(function() {
  //do bindings here
  $("#myForm").submit(handleFormSubmit);
});
function handleFormSubmit(e) {
  //stop form submission
  e.preventDefault(); // stop form submission
  //alert("inside form handler");
  $.ajax({
    method: "POST",
    url: "https://jsonplaceholder.typicode.com/posts",
    data: $("#myForm").serialize(),
    success: handleResponse
  });
  console.log("request sent");
  console.log($("#myForm").serialize());
}
function handleResponse(data, status) {
  console.log("data");
  console.log(data);
}
