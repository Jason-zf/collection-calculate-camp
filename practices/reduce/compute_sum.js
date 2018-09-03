'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
  const sum = (a, b) => a + b;
  return collection.reduce(sum);
}

module.exports = calculate_elements_sum;

