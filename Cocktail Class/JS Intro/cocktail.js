window.onload = function() {
  var btn = document.getElementById("btnShowParagraph");
  btn.onclick = function() {
    var result = document.getElementById("result");
    result.innerHTML = "<p class='orange'>New paragraph</p>";
  };
};
