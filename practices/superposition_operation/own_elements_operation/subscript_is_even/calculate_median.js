'use strict';
var calculate_median = function (collection) {
  var arry = collection.filter(value => (collection.indexOf(value) + 1) % 2 === 0);
  var lowMiddle = Math.floor((arry.length - 1) / 2);
  var highMiddle = Math.ceil((arry.length - 1) / 2);
  var median = (arry[lowMiddle] + arry[highMiddle]) / 2;
  return median;
};
module.exports = calculate_median;
