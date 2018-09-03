'use strict';

function average_to_letter(collection) {
  var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
  //在这里写入代码
  return letters[Math.floor(collection.reduce((a, b) => a + b) / collection.length)];
}

module.exports = average_to_letter;

