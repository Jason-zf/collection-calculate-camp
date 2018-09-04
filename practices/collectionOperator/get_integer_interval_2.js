'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var array = [...Array(Math.abs(number_a - number_b) + 1).keys()].map(value => value + Math.min(number_a, number_b));
  return number_a < number_b ? array.filter(value => value % 2 === 0) : array.filter(value => value % 2 === 0).reverse();
}

module.exports = get_integer_interval_2;


