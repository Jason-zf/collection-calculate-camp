'use strict';
var even_asc_odd_desc = function (collection) {
  var odds = collection.filter(value => value % 2 === 1);
  var evens = collection.filter(value => value % 2 === 0);
  return evens.sort((a, b) => a > b ? 1 : -1).concat(odds.sort((a, b) => a < b ? 1 : -1));
};
module.exports = even_asc_odd_desc;
