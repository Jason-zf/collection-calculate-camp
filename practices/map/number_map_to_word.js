'use strict';

var numberMapToLetter = require('../../common/numberMapperToLetter.js');


var number_map_to_word = function (collection) {
  return collection.map(number => numberMapToLetter(number));
};

module.exports = number_map_to_word;
