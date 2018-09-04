'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  let lowMiddle = Math.floor((collection.length - 1) / 2);
  let highMiddle = Math.ceil((collection.length - 1) / 2);
  let median = Math.round((collection[lowMiddle] + collection[highMiddle]) / 2);
  const mapper = (value) => {
    let numOfA = value / 26;
    let charCode = value % 26 + 'a'.charCodeAt(0) - 1;
    return 'a'.repeat(numOfA) + String.fromCharCode(charCode);
  }
  return mapper(median);
}

module.exports = median_to_letter;
