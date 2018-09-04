'use strict';

var calculate_median = function (array) {
  var lowMiddle = Math.floor((array.length - 1) / 2);
  var highMiddle = Math.ceil((array.length - 1) / 2);
  return (array[lowMiddle] + array[highMiddle]) / 2;
}
module.exports = calculate_median;
