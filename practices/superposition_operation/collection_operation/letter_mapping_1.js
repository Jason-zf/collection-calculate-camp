'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  const mapper = (value) => {
    var numOfA = value / 26;
    var charCode = value % 26 + 'a'.charCodeAt(0) - 1;
    return 'a'.repeat(numOfA) + String.fromCharCode(charCode);
  }
  return collection.filter(value => value % 2 === 0).map(value => mapper(value));
}

module.exports = even_to_letter;
