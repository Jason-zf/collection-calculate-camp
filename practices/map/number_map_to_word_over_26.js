'use strict';
var number_map_to_word_over_26 = function (collection) {
  const mapper = (value) => {
    let numOfA = value / 26;
    let charCode = value % 26 + 'a'.charCodeAt(0) - 1;
    return 'a'.repeat(numOfA) + String.fromCharCode(charCode);
  }
  return collection.map(number => mapper(number));
};

module.exports = number_map_to_word_over_26;
