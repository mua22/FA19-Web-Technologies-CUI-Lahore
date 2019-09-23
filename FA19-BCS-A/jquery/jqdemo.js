$(function() {
  $("#btnToggle").click(function() {
    $("#para")
      .removeClass("blue")
      .addClass("orange")
      .fadeOut();
  });
});
