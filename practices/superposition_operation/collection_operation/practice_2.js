'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  return collection.filter(value => value % 2 === 1).map(value => value * 3 + 2);
}

module.exports = hybrid_operation_to_uneven;

