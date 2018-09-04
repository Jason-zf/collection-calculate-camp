var selector = require('../../../common/count_same_elements_selector.js')

function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var array = collection_a.reduce(selector, []);
  for (var i = 0; i < array.length; i++) {
    if (object_b.value.includes(array[i].key)) {
      array[i].count -= Math.floor(array[i].count / 3);
    }
  }
  return array;
}

module.exports = create_updated_collection;
