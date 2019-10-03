$(function() {
  $("#datetime").datepicker();
  $("#btn").click(function() {
    $("#dummy")
      .addClass("hilight")
      .fadeOut("slow")
      .fadeIn("slow");
  });
});
