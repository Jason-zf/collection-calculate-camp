'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  return collection.map(value => value * 3 + 2).reduce((a, b) => a + b);
}

module.exports = hybrid_operation;

