window.onload = function() {
  var btn = document.getElementById("btnToggle");
  btn.onclick = function() {
    var para = document.getElementById("para");
    para.classList.remove("blue");
    para.classList.add("orange");
  };
};
