$(function() {
  getRecipes();
  console.log("Ajax function called");
  $("#btn").click(sendPostRequest);
  //sendPostRequest();
});
var baseURL = "https://usman-recipes.herokuapp.com/api/recipes";
// var baseURL = "http://localhost:5000/api/recipes/";
function sendPostRequest() {
  console.log("Sending post with");
  var data = $("#newForm").serialize();

  $.ajax({
    // contentType: "application/json; charset=utf-8",
    // data: JSON.stringify({ title: "from my json", body: "from my body" }),
    data: data,
    url: baseURL,
    method: "POST",

    success: function(data, status) {
      console.log(data);
      getRecipes();
    }
  });
}
function getRecipes() {
  console.log("Start fetching recipes");
  $.ajax({
    url: baseURL,
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
