var selector = require('../../../common/count_same_elements_selector');

function count_same_elements(collection) {
  return collection.reduce(selector, []).map(value => {
    return {'name': value.key, 'summary': value.count}
  });
}

module.exports = count_same_elements;
