'use strict';

function compute_average(collection) {
  //在这里写入代码
  const sum = (a, b) => a + b;
  return collection.reduce(sum) / collection.length;
}

module.exports = compute_average;

