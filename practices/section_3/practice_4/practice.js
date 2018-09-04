function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  const selector = (arr, val) => {
    var c = Number.isNaN(parseInt(val.replace(/[^0-9]/g, ''))) === true ? 1 : parseInt(val.replace(/[^0-9]/g, ''));
    var k = val.match(/^[A-Za-z]*/g)[0];
    var flag = false;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].key === k) {
        arr[i].count += c;
        flag = true;
      }
    }
    if (flag === false) {
      arr.push({'key': k, 'count': c});
    }
    return arr;
  }
  var array = collection_a.reduce(selector, []);
  for (var i = 0; i < array.length; i++) {
    if (object_b.value.includes(array[i].key)) {
      array[i].count -= Math.floor(array[i].count / 3);
    }
  }
  return array;
}

module.exports = create_updated_collection;
