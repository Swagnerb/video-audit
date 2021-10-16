function evaluateSelData() {
  console.log(selData);
  //Create div for each array key
  $(".evaluation").empty();

  var selDataKeys = Object.keys(auditData[0]);
  // console.log(selDataKeys);

  $(selDataKeys)
    .slice(2, 19)
    .each(function () {
      var dataKey = this.trim();
      $(".evaluation").append(
        '<div class="eval-div" id="' + dataKey + '"></div>'
      );
    });

  $(".evaluation .eval-div").each(function () {
    let divId = $(this).attr("id");
    $(this).append('<div class="eval-div-header"><p>' + divId + "</p></div>");
  });

  selDataCount = selData.length;
  var lineups = [];
  var channels = [];
  var stationNames = [];
  var multicasts = [];
  var multicastPort = [];
  var outputChannel = [];
  var inputSourceID = [];
  var internetworkDevice = [];
  var bentleyEntry = [];
  var sourceProgram = [];
  var pmt = [];
  var pcr = [];
  var SourceTransportIP = [];
  var sourcePort = [];
  var sourceTransportDevice = [];

  for (let i = 0; i < selData.length; i++) {
    // console.log(selData)
    var rowObj = selData[i];
    lineups.push(rowObj["SA-Lineup"]);
    channels.push(rowObj["Channel"]);
    stationNames.push(rowObj["Station Name"]);
    multicasts.push(rowObj["Network Multicast IP"]);
    multicastPort.push(rowObj["Network Multicast Port"]);
    outputChannel.push(rowObj["Output Channel"]);
    inputSourceID.push(rowObj["Input Source ID"]);
    internetworkDevice.push(rowObj["Internetwork Device"]);
    bentleyEntry.push(rowObj["Bentley Entry"]);
    sourceProgram.push(rowObj["Source Program"]);
    pmt.push(rowObj["PMT"]);
    pcr.push(rowObj["PCR"]);
    SourceTransportIP.push(rowObj["Source Transport IP"]);
    sourcePort.push(rowObj["Source Port"]);
    sourceTransportDevice.push(rowObj["Source Transport Device"]);
  }

  var lineupsUnique = uniqueOccurrences(lineups);
  var channelsUnique = uniqueOccurrences(channels);
  var stationNamesUnique = uniqueOccurrences(stationNames);
  var multicastsUnique = uniqueOccurrences(multicasts);
  var multicastPortsUnique = uniqueOccurrences(multicastPort);
  var outputChannelsUnique = uniqueOccurrences(outputChannel);
  var inputSourceIDUnique = uniqueOccurrences(inputSourceID);
  var internetworkDeviceUnique = uniqueOccurrences(internetworkDevice);
  var bentleyEntryUnique = uniqueOccurrences(bentleyEntry);
  var sourceProgramsUnique = uniqueOccurrences(sourceProgram);
  var PMTsUnique = uniqueOccurrences(pmt);
  var PCRsUnique = uniqueOccurrences(pcr);
  var sourceTransportIPsUnique = uniqueOccurrences(SourceTransportIP);
  var sourcePortUnique = uniqueOccurrences(sourcePort);
  var sourceTransportDeviceUnique = uniqueOccurrences(sourceTransportDevice);

  var evaluatedData = [];
  evaluatedData.push(
    lineupsUnique,
    channelsUnique,
    stationNamesUnique,
    multicastsUnique,
    multicastPortsUnique,
    outputChannelsUnique,
    inputSourceIDUnique,
    internetworkDeviceUnique,
    bentleyEntryUnique,
    sourceProgramsUnique,
    PMTsUnique,
    PCRsUnique,
    sourceTransportIPsUnique,
    sourcePortUnique,
    sourceTransportDeviceUnique
  );

  console.log(evaluatedData);

  for (let i = 0; i < evaluatedData.length; i++) {
    var keys = Object.keys(evaluatedData[i]);
    var keyValues = Object.values(evaluatedData[i]);

    $(".evaluation")
      .children()
      .slice(i, i + 1)
      .append(
        '<div class="eval-table">' +
          '<div class="keys"><p>' +
          keys.join("</p><p>") +
          '</p></div> <div class="values">' +
          keyValues.join("<br>") +
          "</div></div"
      );
  }
}

function arraySort(arr) {
  arr = arr.sort(function (a, b) {
    return a - b;
  });
}

function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

function attrMyTable() {
  $("#myTable > tbody").attr("id", "myTableBody");
  $("#myTable > thead").attr("id", "myTableHead");
  $("#myTable thead").before("<colgroup></colgroup>");
  $("#myTable colgroup").attr("id", "myTableColumns");
  $("#myTable colgroup").before(
    '<caption>Video Audit<input id="myInput" type="text" placeholder="Search.."></caption>'
  );
}

function uniqueArray(array) {
  return $.grep(array, function (el, index) {
    return index === $.inArray(el, array);
  });
}

function uniqueOccurrences(array) {
  result = {};
  for (var i = 0; i < array.length; ++i) {
    if (!result[array[i]]) result[array[i]] = 0;
    ++result[array[i]];
  }
  result = Object.entries(result);
  result.sort(function (a, b) {
    return b[1] - a[1];
  });
  // console.log(result);
  result = Object.fromEntries(result);
  return result;
}
