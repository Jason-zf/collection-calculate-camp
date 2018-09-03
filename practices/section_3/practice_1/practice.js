function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  for (var i = 0; i < collection_a.length; i++) {
    if (object_b.value.includes(collection_a[i].key)) {
      collection_a[i].count--;
    }
  }
  return collection_a;
}

module.exports = create_updated_collection;
