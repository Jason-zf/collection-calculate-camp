'use strict';
var numberMapToLetter = require('../../../common/numberMapperToLetter.js');

function even_to_letter(collection) {

  //在这里写入代码
  return collection.filter(value => value % 2 === 0).map(value => numberMapToLetter(value));
}

module.exports = even_to_letter;
