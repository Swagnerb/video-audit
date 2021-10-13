var selLineups = [];
$(function () {
  $('.lineups .lineup-row').click(function () {
    var inputId = $(this).attr('id');
    if (selLineups.length == 0) {
      selLineups.push(inputId);
      $(this).addClass('selected')
    } else if (selLineups.indexOf(inputId) == -1){
      selLineups.push(inputId);
      $(this).addClass('selected')
    } else if (selLineups.indexOf(inputId > -1)) {
      let i = selLineups.indexOf(inputId);
      selLineups.splice(i, 1);
      $(this).toggleClass('selected')
    } else {
      alert("ERROR");
    };
    console.log(selLineups);
  });
});

$(function () {
  $('#lineupBtn').click(function () {
    var indexSelected = [];
    
    $('#myTableBody tr').each(function () {
      var curIndex = $(this).children().slice(1,2).text();
      // console.log(curIndex);
      if (selLineups.indexOf($(this).children().slice(2,3).text()) > -1) {
        $(this).children().slice(0,1).addClass('selected');
        indexSelected.push(curIndex);
        // auditSelected.push(curIndex);
        selData.push(auditData[curIndex]);
      } else if (selLineups.indexOf($(this).children().slice(2,3).text()) == -1) {
        selData.splice(curIndex,1);
      } else {
        alert("ERROR");
      };
      arraySort (indexSelected);
    });
  });
});

$(function () {
  $('#ToggleDataBtn').click(function () {
    $('#myTable').toggle();
  });

  $('#ToggleEvaluationBtn').click(function () {
    $('.evaluation').toggle();
  });
})