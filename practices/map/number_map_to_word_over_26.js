'use strict';

var numberMapToLetter = require('../../common/number_mapper_to_letter.js');

var number_map_to_word_over_26 = function (collection) {
  return collection.map(number => numberMapToLetter(number));
};

module.exports = number_map_to_word_over_26;
