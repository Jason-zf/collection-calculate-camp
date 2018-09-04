'use strict';

function median_to_varter(collection) {

  //在这里写入代码
  var lowMiddle = Math.floor((collection.length - 1) / 2);
  var highMiddle = Math.ceil((collection.length - 1) / 2);
  var median = Math.round((collection[lowMiddle] + collection[highMiddle]) / 2);
  const mapper = (value) => {
    var numOfA = (value - 1) / 26 - 1;
    var charCode = (value - 1) % 26 + 'a'.charCodeAt(0);
    return (numOfA >= 0 ? String.fromCharCode('a'.charCodeAt(0) + numOfA) : "") + String.fromCharCode(charCode);
  }
  return mapper(median);
}

module.exports = median_to_varter;
