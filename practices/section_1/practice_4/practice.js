function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var keys = [];
  for (var i = 0; i < collection_a.length; i++) {
    keys.push(collection_a[i].key);
  }
  return keys.filter(value => object_b.value.includes(value));
}

module.exports = collect_same_elements;

