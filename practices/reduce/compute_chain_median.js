'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  var array = collection.split('->').map(value => parseInt(value)).sort((a, b) => a < b ? 1 : -1);
  var lowMiddle = Math.floor((array.length - 1) / 2);
  var highMiddle = Math.ceil((array.length - 1) / 2);
  var median = (array[lowMiddle] + array[highMiddle]) / 2;
  return median;
}

module.exports = compute_chain_median;
