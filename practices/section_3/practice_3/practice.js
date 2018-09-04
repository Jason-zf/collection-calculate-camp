function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  const selector = (arr, val) => {
    var c = Number.isNaN(parseInt(val.replace(/[^0-9]/g, ''))) === true ? 1 : parseInt(val.replace(/[^0-9]/g, ''));
    var k = val.match(/^[A-Za-z]*/g);
    if (k in arr) {
      arr[k].count += c;
    } else {
      arr[k].key = k;
      arr[k].count = c;
    }
    return arr;
  }
  return collection.reduce(selector, {});
}

module.exports = create_updated_collection;
