var selData = [];

$(function () {
  $("#myTable").on("click", "tbody > tr", function () {
    console.log("clicked");
    var indexSelected = [];
    var auditSelected = [];

    var curIndex = $(this).children().slice(1, 2).text();
    if ($(this).children().slice(0, 1).hasClass("selected")) {
      $(this).children().slice(0, 1).removeClass("selected");
      indexSelected = [];
      auditSelected = [];
      selData = [];
      $("#myTableBody tr").each(function () {
        var curIndexAdd = $(this).children().slice(1, 2).text();
        if ($(this).children().slice(0, 1).hasClass("selected")) {
          indexSelected.push(curIndexAdd);
          auditSelected.push(curIndex);
          selData.push(auditData[curIndexAdd]);
        }
      });
    } else {
      $(this).children().slice(0, 1).addClass("selected");
      indexSelected.push(curIndex);
      auditSelected.push(curIndex);
      selData.push(auditData[curIndex]);
    }

    arraySort(indexSelected);
    evaluateSelData();
  });
});
