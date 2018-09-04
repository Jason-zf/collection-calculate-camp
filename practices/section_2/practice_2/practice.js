var selector = require('../../../common/count_same_elements_selector.js');

function count_same_elements(collection) {
  //在这里写入代码
  return collection.reduce(selector, []);
}

module.exports = count_same_elements;
