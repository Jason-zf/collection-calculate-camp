'use strict';
var calculateMedian = require('../../common/calculateMedian.js');

function compute_median(collection) {
  //在这里写入代码
  collection = collection.sort((a, b) => a > b ? 1 : -1);
  return calculateMedian(collection);
}

module.exports = compute_median;


