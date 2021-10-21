function evaluateSelData() {
  // console.log(selData);
  //Create div for each array key
  $(".evaluation").empty();

  let selDataKeys = Object.keys(auditData[0]);
  // console.log(selDataKeys);

  $(selDataKeys)
    .slice(2, 19)
    .each(function () {
      let dataKey = this.trim();
      $(".evaluation").append(
        '<div class="eval-div" id="' + dataKey + '"></div>'
      );
    });

  $(".evaluation .eval-div").each(function () {
    let divId = $(this).attr("id");
    $(this).append('<div class="eval-div-header"><p>' + divId + "</p></div>");
  });

  selDataCount = selData.length;
  let lineups = [];
  let channels = [];
  let stationNames = [];
  let multicasts = [];
  let multicastPort = [];
  let outputChannel = [];
  let inputSourceID = [];
  let internetworkDevice = [];
  let bentleyEntry = [];
  let sourceProgram = [];
  let pmt = [];
  let pcr = [];
  let SourceTransportIP = [];
  let sourcePort = [];
  let sourceTransportDevice = [];

  for (let i = 0; i < selData.length; i++) {
    let rowObj = selData[i];
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

    // console.log(rowObj);
  }

  console.log(multicastPort);

  let lineupsUnique = uniqueOccurrences(lineups);
  let channelsUnique = uniqueOccurrences(channels);
  let stationNamesUnique = uniqueOccurrences(stationNames);
  let multicastsUnique = uniqueOccurrences(multicasts);
  let multicastPortsUnique = uniqueOccurrences(multicastPort);
  console.log(multicastPortsUnique);
  let outputChannelsUnique = uniqueOccurrences(outputChannel);
  let inputSourceIDUnique = uniqueOccurrences(inputSourceID);
  let internetworkDeviceUnique = uniqueOccurrences(internetworkDevice);
  let bentleyEntryUnique = uniqueOccurrences(bentleyEntry);
  let sourceProgramsUnique = uniqueOccurrences(sourceProgram);
  let PMTsUnique = uniqueOccurrences(pmt);
  let PCRsUnique = uniqueOccurrences(pcr);
  let sourceTransportIPsUnique = uniqueOccurrences(SourceTransportIP);
  let sourcePortUnique = uniqueOccurrences(sourcePort);
  let sourceTransportDeviceUnique = uniqueOccurrences(sourceTransportDevice);

  let evaluatedData = [];
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

  for (let i = 0; i < evaluatedData.length; i++) {
    let keys = Object.keys(evaluatedData[i]);
    let keyValues = Object.values(evaluatedData[i]);
    let tRows = [];

    for (let a = 0; a < keys.length; a++) {
      let tr = `<tr><td>${keys[a]}</td><td>${keyValues[a]}</td></tr>`;
      tRows.push(tr);
    }

    tRows = tRows.join();
    tRows = tRows.replace(/,/g, "");

    $(".evaluation")
      .children()
      .slice(i, i + 1)
      .append(
        `<table class="eval-table"><colgroup><col class="keys" id="keys"><col class="values" id="values"></colgroup><thead><tr><th>Key</th><th>Value</th></tr></thead><tbody class="eval-tbody">${tRows}</tbody></table>`
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

// function uniqueArray(array) {
//   return $.grep(array, function (el, index) {
//     return index === $.inArray(el, array);
//   });
// }

function uniqueOccurrences(array) {
  console.log(array)
  result = {};
  for (let i = 0; i < array.length; ++i) {
    if (!result[array[i]]) result[array[i]] = 0;
    ++result[array[i]];
  }

  console.log(result);

  let sorted = Object.fromEntries(
    Object.entries(result).sort(([,a],[,b]) => a - b)
  );

  console.log(sorted);

  return sorted;
}
