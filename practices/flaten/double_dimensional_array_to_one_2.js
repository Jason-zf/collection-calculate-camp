'use strict';

function double_to_one(collection) {

  //在这里写入代码
  return Array.from(new Set(Array.prototype.concat.apply([], collection)));

}

module.exports = double_to_one;
