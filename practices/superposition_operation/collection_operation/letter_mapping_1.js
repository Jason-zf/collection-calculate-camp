'use strict';

function even_to_letter(collection) {
  var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

  //在这里写入代码
  return collection.filter(value => value % 2 === 0).map(value => letters[collection.indexOf(value)]);
}

module.exports = even_to_letter;
