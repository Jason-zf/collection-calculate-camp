'use strict';

function average_to_letter(collection) {
  var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
  //在这里写入代码
  const mapper = (value) => {
    var numOfA = value / 26;
    var charCode = value % 26 + 'a'.charCodeAt(0) - 1;
    return 'a'.repeat(numOfA) + String.fromCharCode(charCode);
  }
  return mapper(Math.round(collection.reduce((a, b) => a + b) / collection.length));
}

module.exports = average_to_letter;

