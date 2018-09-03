'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  var indexs = [];
  var idx = collection.indexOf(element);
  while (idx != -1) {
    indexs.push(idx);
    idx = collection.indexOf(element, idx + 1);
  }
  return indexs[indexs.length - 1];
}

module.exports = calculate_elements_sum;
