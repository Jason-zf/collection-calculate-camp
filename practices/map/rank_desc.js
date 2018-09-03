'use strict';
var rank_desc = function (collection) {
  const comparator = (a, b) => a > b ? 1 : -1;
  return collection.sort(comparator);
};

module.exports = rank_desc;
