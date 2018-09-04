'use strict';
var numberMapToLetter = require('../../../common/numberMapperToLetter.js');
var calculateMedian = require('../../../common/calculateMedian.js');

function median_to_varter(collection) {

  //在这里写入代码
  return numberMapToLetter(Math.round(calculateMedian(collection)));
}

module.exports = median_to_varter;
