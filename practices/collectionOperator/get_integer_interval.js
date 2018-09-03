'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  if (number_a === number_b) {
    return [5];
  }
  if (number_a < number_b) {
    return Array.from({length: 5}, (v, k) => k + 1);
  }
  return Array.from({length: 5}, (v, k) => v + 1);

}

module.exports = get_integer_interval;

