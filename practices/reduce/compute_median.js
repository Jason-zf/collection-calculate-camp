'use strict';

function compute_median(collection) {
  //在这里写入代码
  let lowMiddle = Math.floor((collection.length - 1) / 2);
  let highMiddle = Math.ceil((collection.length - 1) / 2);
  let median = (collection[lowMiddle] + collection[highMiddle]) / 2;
  return median;
}

module.exports = compute_median;


