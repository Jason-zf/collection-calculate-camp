'use strict';
var calculate_median = function (collection) {
  var arry = collection.filter(value => (collection.indexOf(value) + 1) % 2 === 0);
  let lowMiddle = Math.floor((arry.length - 1) / 2);
  let highMiddle = Math.ceil((arry.length - 1) / 2);
  let median = (arry[lowMiddle] + arry[highMiddle]) / 2;
  return median;
};
module.exports = calculate_median;
