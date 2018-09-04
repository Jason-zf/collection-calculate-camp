'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var array = [...Array(Math.abs(number_a - number_b) + 1).keys()].map(value => value + Math.min(number_a, number_b));
  const mapper = (value) => {
    var numOfA = (value - 1) / 26 - 1;
    var charCode = (value - 1) % 26 + 'a'.charCodeAt(0);
    return (numOfA >= 0 ? String.fromCharCode('a'.charCodeAt(0) + numOfA) : "") + String.fromCharCode(charCode);
  }
  array = array.map(value => mapper(value));
  return number_a < number_b ? array : array.reverse();
}

module.exports = get_letter_interval_2;

