'use strict';
var numberMapToLetter = require('../../../common/number_mapper_to_letter.js');
var calculateMedian = require('../../../common/calculate_median.js');

function median_to_varter(collection) {

  //在这里写入代码
  return numberMapToLetter(Math.round(calculateMedian(collection)));
}

module.exports = median_to_varter;
