var auditData = [];
$(function () { //Get JSON file and build table UI
  $.ajax({
    type: "get",
    url: "data.json",
    dataType: "json",
    cache: true,
    success: function (data) {
      auditData = data.myData;

      generateTable(document.getElementById("myTable"), auditData);
      generateTableHead(
        document.getElementById("myTable"),
        Object.keys(auditData[0])
      );
      attrMyTable();

      let colIndx = 0;
      $("#myTableHead > tr > th").each(function () {
        $("#myTableColumns").append(`<col id="col${colIndx}">`);
        colIndx++;
      });

      $("#myTableColumns").children().slice(-1).css("min-width", "200px");
    },
  });
});