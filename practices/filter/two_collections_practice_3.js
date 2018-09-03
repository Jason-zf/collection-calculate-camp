'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  return collection_a.filter(number_a => collection_b.filter(number_b => number_a % number_b === 0).length > 0);
}

module.exports = choose_divisible_integer;
