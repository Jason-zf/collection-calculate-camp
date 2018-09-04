'use strict';
var calculateMedian = require('../../common/calculate_median.js');

function compute_median(collection) {
  //在这里写入代码
  collection = collection.sort((a, b) => a > b ? 1 : -1);
  return calculateMedian(collection);
}

module.exports = compute_median;


