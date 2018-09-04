'use strict';
var even_group_calculate_average = function (collection) {
  var array = collection.filter(value => (collection.indexOf(value) + 1) % 2 === 0).filter(number => number % 2 === 0);
  if (array.length === 0) {
    return [0];
  }
  var res = [];
  const sum = (a, b) => (a + b);
  for (var i = 0; Math.pow(10, i) < array.sort()[array.length - 1]; i++) {
    var temp = array.filter(number => (number > Math.pow(10, i) - 1 && number < Math.pow(10, i + 1)));
    if (temp.length > 0) {
      res.push(temp.reduce(sum) / temp.length);
    }
  }
  return res;
}
module.exports = even_group_calculate_average;


