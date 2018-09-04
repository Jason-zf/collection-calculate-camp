'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var array = [...Array(Math.abs(number_a - number_b) + 1).keys()].map(value => String.fromCharCode(value + Math.min(number_a, number_b) + 'a'.charCodeAt(0) - 1));
  return number_a < number_b ? array : array.reverse();
}

module.exports = get_letter_interval;
