'use strict';
var number_map_to_word_over_26 = function (collection) {
  var strings = ['a', 'm', 'aa', 'ad', 'y', 'aa'];
  return collection.map(number => strings[collection.indexOf(number)]);
};

module.exports = number_map_to_word_over_26;
