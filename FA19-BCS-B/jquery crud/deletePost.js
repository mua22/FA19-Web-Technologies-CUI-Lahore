$(function() {
  console.log("Starting fetch posts");
  $(".deleteButton").click(handleDeleteButton);
  $("#results").on("click", ".deleteButton", handleDeleteButton);
  getPosts();
});
function handleDeleteButton(e) {
  //alert("Delete Clicked");
  // how to get that id
  var id = $(this).attr("id");
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts/" + id,
    method: "DELETE",
    success: function() {
      console.log(id + " :deleted");
    }
  });
  console.log("button id: " + id + " clicked");
}
function getPosts() {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "GET",
    success: function(data, status) {
      console.log("Posts Fetched");
      for (var i = 0; i < 5; i++) {
        var post = data[i];
        var id = post.id;
        console.log("id: " + id);
        $("#results").append(
          `<p><button class="deleteButton" id="${id}">delete</button>${post.title}</p>`
        );
      }
    }
  });
}
