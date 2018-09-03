'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  let lowMiddle = Math.floor((collection.length - 1) / 2);
  let highMiddle = Math.ceil((collection.length - 1) / 2);
  let median = Math.round((collection[lowMiddle] + collection[highMiddle]) / 2);
  return median === 37 ? 'ak' : "";
}

module.exports = median_to_letter;
