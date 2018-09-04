'use strict';
var calculateMedian = require('../../../../common/calculateMedian.js');

var calculate_median = function (collection) {
  var array = collection.filter(value => (collection.indexOf(value) + 1) % 2 === 0);
  return calculateMedian(array);
};
module.exports = calculate_median;
