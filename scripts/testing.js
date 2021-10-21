let testArr = ["8208", "3100", "8208", "8208"];

function uniqueOccurrences2(array) {
  console.log(array);
  result = {};
  for (let i = 0; i < array.length; ++i) {
    if (!result[array[i]]) result[array[i]] = 0;
    ++result[array[i]];
  }

  console.log(result);

  let sortable = [];
  for (let item in result) {
    sortable.push([item, result[item]]);
  }

  sortable.sort(function (a, b) {
    return b[1] - a[1];
  });

  console.log(sortable);

  let objSorted = Object.fromEntries(sortable)

  console.log(objSorted);

  return objSorted;
}

uniqueOccurrences2(testArr);
