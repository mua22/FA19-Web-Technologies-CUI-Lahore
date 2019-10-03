$(function() {
  getPosts();
  //   $(".delete").click(handleDelete);
  $("#results").on("click", ".delete", handleDelete);
});
function handleDelete() {
  var id = $(this).attr("data-id");
  console.log(id + " : Delete clicked");
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts/" + id,
    method: "DELETE",
    success: function() {
      console.log("dleted");
    }
  });
}
function getPosts() {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "GET",
    success: function(data, status) {
      console.log("posts received");
      for (var i = 0; i < 5; i++) {
        var post = data[i];
        $("#results").append("<h3>" + post.title + "</h3>");
        $("#results").append(
          "<button data-id='" + post.id + "' class='delete'>Delete</Button>"
        );
      }
      //   $(".delete").click(handleDelete);
    }
  });
}
