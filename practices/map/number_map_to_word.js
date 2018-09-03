'use strict';
var number_map_to_word = function (collection) {
  var strings = ['a', 'b', 'c', 'd', 'e'];
  return collection.map(number => strings[collection.indexOf(number)]);
};

module.exports = number_map_to_word;
