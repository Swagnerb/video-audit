$(function () {  // Filter Script
  $("#myTable").on("keyup", "caption > input", function () {
    filterTable()
  });

  $(".evaluation").on("click", ".keys p", function () {
    var value = $(this).text().toLowerCase();
    $(this).addClass("selected");
    $('#myInput').val(value);
    filterTable ();
  });
});

function filterTable() {
  var value = $('#myInput').val().toLowerCase();
  $("#myTableBody tr").filter(function () {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
  });
}