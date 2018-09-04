'use strict';

function compute_median(collection) {
  //在这里写入代码
  collection = collection.sort((a, b) => a > b ? 1 : -1);
  var lowMiddle = Math.floor((collection.length - 1) / 2);
  var highMiddle = Math.ceil((collection.length - 1) / 2);
  var median = (collection[lowMiddle] + collection[highMiddle]) / 2;
  return median;
}

module.exports = compute_median;


