'use strict';
var numberMapToLetter = require('../../common/number_mapper_to_letter.js');

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var array = [...Array(Math.abs(number_a - number_b) + 1).keys()].map(value => value + Math.min(number_a, number_b));
  array = array.map(value => numberMapToLetter(value));
  return number_a < number_b ? array : array.reverse();
}

module.exports = get_letter_interval_2;

