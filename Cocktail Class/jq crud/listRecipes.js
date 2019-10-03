$(function() {
  getRecipes();
  console.log("Ajax function called");
  $("#btn").click(sendPostRequest);
});

function sendPostRequest() {
  console.log("Sending post");
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    data: { title: "Fried Rice", body: "dont know how to make" },
    method: "POST",
    success: function(data, status) {
      console.log(data);
    }
  });
}
function getRecipes() {
  console.log("Start fetching recipes");
  $.ajax({
    url: "https://usman-recipes.herokuapp.com/api/recipes",
    method: "GET",
    success: handleResponse
  });
  console.log("Ajax Request sent");
}

function handleResponse(data, status) {
  console.log("Ajax request returned with data;");
  console.log(data);
  $("#recipes").html("");
  for (var i = 0; i < data.length; i++) {
    var rec = data[i];
    $("#recipes").append("<h1>" + rec.title + "</h1>");
    $("#recipes").append("<p>" + rec.body + "</p>");
  }
}
