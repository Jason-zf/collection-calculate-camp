'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  const comparator = (a, b) => a < b ? a : b;
  return collection.reduce(comparator);
}

module.exports = collect_min_number;

