'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  var comparator = (a, b) => a < b ? 1 : -1;
  return collection_a.sort(comparator).toString() === collection_b.sort(comparator).toString();
}

module.exports = compare_collections;


