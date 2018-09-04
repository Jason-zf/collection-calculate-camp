'use strict';
var numberMapToLetter = require('../../../common/number_mapper_to_letter.js');

function average_to_letter(collection) {
  var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
  //在这里写入代码
  return numberMapToLetter(Math.round(collection.reduce((a, b) => a + b) / collection.length));
}

module.exports = average_to_letter;

