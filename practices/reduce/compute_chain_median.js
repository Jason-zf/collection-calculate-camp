'use strict';
var calculateMedian = require('../../common/calculateMedian.js');

function compute_chain_median(collection) {
  //在这里写入代码
  var array = collection.split('->').map(value => parseInt(value)).sort((a, b) => a < b ? 1 : -1);
  return calculateMedian(array);
}

module.exports = compute_chain_median;
