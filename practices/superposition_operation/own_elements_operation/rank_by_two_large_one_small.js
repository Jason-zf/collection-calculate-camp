'use strict';

function rank_by_two_large_one_small(collection) {
  //这里写代码。。。
  collection = collection.sort((a, b) => a > b ? 1 : -1);
  var res = Array.apply(null, {length: collection.length}).fill(0);
  for (var i = 0; i < collection.length; i += 3) {
    var add = 0;
    if (i + 2 < collection.length) {
      res[i + 2] = collection[i];
      add = 1;
    }
    res[i] = collection[i + add];
    res[i + 1] = collection[i + 1 + add];
  }
  return res;
}

module.exports = rank_by_two_large_one_small;

