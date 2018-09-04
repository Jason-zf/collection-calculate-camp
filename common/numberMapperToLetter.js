'use strict';
var numberMapToLetter = function (value) {
  var numOfA = (value - 1) / 26 - 1;
  var charCode = (value - 1) % 26 + 'a'.charCodeAt(0);
  return (numOfA >= 0 ? String.fromCharCode('a'.charCodeAt(0) + numOfA) : "") + String.fromCharCode(charCode);
};

module.exports = numberMapToLetter;



