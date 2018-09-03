'use strict';

function find_last_even(collection) {
  //在这里写入代码
  var evens = collection.filter(number => number % 2 === 0);
  return evens[evens.length - 1];
}

module.exports = find_last_even;
