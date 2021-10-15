var auditData = [];
$(function () {
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
        // console.log($(this).text().trim(),$(this).css('width'))
        $("#myTableColumns").append('<col id="col' + colIndx + '">');
        colIndx++;
      });

      $("#myTableColumns").children().slice(-1).css("min-width", "200px");
    },
  });
});

$(function () {
  $("#myTableBody > tr").each(function () {
    $(this).children().slice(0, 1).text("");
    $(this).children().slice(0, 1).addClass("");
  });

  // var inputWidth = 0; //Sum col widths
  // $("#myTableColumns")
  //   .children()
  //   .slice(0, 4)
  //   .each(function () {
  //     inputWidth = inputWidth + $(this).width();
  //   });
  // $("#myInput").width(inputWidth - 10);
  // $("#myButton").css("left", inputWidth + 10);
});
