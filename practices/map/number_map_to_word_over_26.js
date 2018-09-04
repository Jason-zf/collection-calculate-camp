'use strict';
var number_map_to_word_over_26 = function (collection) {
  const mapper = (value) => {
    var numOfA = value / 26;
    var charCode = value % 26 + 'a'.charCodeAt(0) - 1;
    return 'a'.repeat(numOfA) + String.fromCharCode(charCode);
  }
  return collection.map(number => mapper(number));
};

module.exports = number_map_to_word_over_26;
