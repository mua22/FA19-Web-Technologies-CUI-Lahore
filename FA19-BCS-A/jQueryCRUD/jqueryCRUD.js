$(function() {
  //bind all events here;
  $("#btnGetPosts").click(getAllPosts);
});

/**
 * user Jquery Ajax to fetch records
 * from https://jsonplaceholder.typicode.com/posts
 */
function getAllPosts() {
  //this is the demonstration how the get method
  //with ajax can be used using jquery
  console.log($);
  $.get("https://jsonplaceholder.typicode.com/posts", function(data, status) {
    //console.log(data);
    $("#posts").html("");
    for (var i = 0; i < data.length; i++) {
      var singlePost = data[i];
      console.log(singlePost);
      $("#posts").append(
        '<div class="single-post"><h3>' + singlePost.title + "</h3></div>"
      );
    }
  });
}
