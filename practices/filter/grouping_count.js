'use strict';

function grouping_count(collection) {

  //在这里写入代码
  const selector = (arr, val) => {
    if (val in arr) {
      arr[val]++;
    } else {
      arr[val] = 1;
    }
    return arr;
  }
  return collection.reduce(selector, {});
}

module.exports = grouping_count;
