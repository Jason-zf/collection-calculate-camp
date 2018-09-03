'use strict';

function average_uneven(collection) {

  //在这里写入代码
  var odds = collection.filter(value => value % 2 === 1);
  return odds.reduce((a, b) => a + b) / odds.length;
}

module.exports = average_uneven;
