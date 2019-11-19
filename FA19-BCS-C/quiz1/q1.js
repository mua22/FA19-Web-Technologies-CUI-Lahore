var persons = ["Usman", "Noman", "Ali"];

$(function() {
  $("#btnLoadPersons").click(loadPersons);
  $("#btnSortPersons").click(function() {
    $("#persons").empty();
    persons.sort();
    loadPersons();
  });
});

function loadPersons() {
  for (var i = 0; i < persons.length; i++)
    $("#persons").append("<p>" + persons[i] + "</p>");
}
