'use strict';
var number_map_to_word_over_26 = function (collection) {
  const mapper = (value) => {
    var numOfA = (value - 1) / 26 - 1;
    var charCode = (value - 1) % 26 + 'a'.charCodeAt(0);
    return (numOfA >= 0 ? String.fromCharCode('a'.charCodeAt(0) + numOfA) : "") + String.fromCharCode(charCode);
  }
  return collection.map(number => mapper(number));
};

module.exports = number_map_to_word_over_26;
