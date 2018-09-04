'use strict';
var single_element = function (collection) {
  var array = [];
  for (var i = 0; i < collection.length; i++) {
    if ((i + 1) % 2 === 0) {
      array.push(collection[i]);
    }
  }
  return array.filter(value => array.indexOf(value, array.indexOf(value) === undefined));
};
module.exports = single_element;
