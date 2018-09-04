function count_same_elements(collection) {
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
  return collection.reduce(selector, []);
}

module.exports = count_same_elements;
