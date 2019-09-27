$(function() {
  //bind all events here;
  getAllPosts();
  $("#btnAddPost").click(function() {
    $(".newForm").fadeIn();
  });
  $("#btnCancel").click(function(e) {
    e.preventDefault();
    $("#newPostForm").trigger("reset");
    $(".newForm").fadeOut();
  });
  $("#newPostForm").submit(handleNewformSubmit);

  $("#posts").on("click", ".btnPostDelete", handleDelete);
  $("#posts").on("click", ".btnPostEdit", handleEdit);
  $("#btnSaveEdit").click(saveEditData);
});

function saveEditData(e) {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts/" + $("#editId").val(),
    method: "PUT",
    data: $("#editForm").serialize(),
    success: function(data, status) {
      console.log(data);
      $("#exampleModal").modal("hide");
    }
  });
}
function handleEdit(e) {
  var id = $(this).attr("data-id");
  $.get("https://jsonplaceholder.typicode.com/posts/" + id, function(
    data,
    status
  ) {
    console.log(data);
    $("#exampleModal").modal("show");
    $("#editTitle").val(data.title);
    $("#editBody").val(data.body);
    $("#editId").val(data.id);
  });
}
function handleDelete() {
  var id = $(this).attr("data-id");
  //alert(id + " clicked");
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts/" + id,
    method: "DELETE",
    success: function() {
      console.log("deleted");
    }
  });
}
function handleNewformSubmit(e) {
  e.preventDefault();
  console.log($(this).serialize());
  $.post("https://jsonplaceholder.typicode.com/posts", $(this).serialize()),
    function(data, status) {
      console.log(data);
    };
}
/**
 * user Jquery Ajax to fetch records
 * from https://jsonplaceholder.typicode.com/posts
 */
function getAllPosts() {
  //this is the demonstration how the get method
  //with ajax can be used using jquery
  $.get("https://jsonplaceholder.typicode.com/posts", function(data, status) {
    //console.log(data);
    $("#posts").html("");
    for (var i = 0; i < data.length; i++) {
      $("#posts").append(`<tr>
      <td>${data[i].id}</td>
      <td>${data[i].title}</td>
      <td>${data[i].body}</td>
      <td width="20%">
        <button data-id="${data[i].id}" class="btn btn-info btnPostEdit" type="button"        
        >Edit</button>
        <button data-id="${data[i].id}" class="btn btn-danger btnPostDelete">Delete</button>
      </td>
    </tr>`);
    }
  });
}
