'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  var array = [...Array(Math.abs(number_a - number_b) + 1).keys()].map(value => value + Math.min(number_a, number_b));
  return number_a < number_b ? array : array.reverse();
}

module.exports = get_integer_interval;

