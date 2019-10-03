$(function() {
  getPosts();
  $(".delete").click(handleDelete);
  $("#results").on("click", ".delete", handleDelete);
});
function handleDelete(e) {
  //console.log("Delete clicked");
  //i need id to delete
  var id = $(this).attr("data-id");
  console.log(id + "Delete clicked");
  $("#post" + id).remove();
  $.ajax({
    method: "DELETE",
    url: "https://jsonplaceholder.typicode.com/posts/" + id,
    success: function(data, resposne) {
      console.log(id + " : deleted");
    }
  });
}
function getPosts() {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "GET",
    success: function(data, response) {
      for (var i = 0; i < 5; i++) {
        var post = data[i];
        $("#results").append(
          `<li id="post${post.id}"><button data-id="${post.id}" class='delete'>Delete</button>${post.title}</li>`
        );
      }
      //$(".delete").click(handleDelete);
    }
  });
}
