'use strict';
var calculate_average = function (collection) {
  var arry = collection.filter(value => (collection.indexOf(value) + 1) % 2 === 0);
  return arry.reduce((a, b) => a + b) / arry.length;
};
module.exports = calculate_average;
