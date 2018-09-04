'use strict';

function average_to_letter(collection) {
  var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
  //在这里写入代码
  const mapper = (value) => {
    var numOfA = (value - 1) / 26 - 1;
    var charCode = (value - 1) % 26 + 'a'.charCodeAt(0);
    return (numOfA >= 0 ? String.fromCharCode('a'.charCodeAt(0) + numOfA) : "") + String.fromCharCode(charCode);
  }
  return mapper(Math.round(collection.reduce((a, b) => a + b) / collection.length));
}

module.exports = average_to_letter;

