$(function () {
  //Filter Script
  $("#myTable").on("keyup", "caption > input", function () {
    var value = $(this).val().toLowerCase();
    $("#myTableBody tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });

  $(".evaluation").on("click", ".keys", function () {
    console.log("clicked");
    var value = $(this).text().toLowerCase();
    console.log(value);
    $("#myTableBody tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
    console.log("filtered");
  });
});
