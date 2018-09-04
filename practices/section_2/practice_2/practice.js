function count_same_elements(collection) {
  //在这里写入代码
  const selector = (arr, val) => {
    var count = parseInt(val.replace(/[^0-9]/g, ''));
    if (!Number.isNaN(count)) {
      var key = val.match(/^[A-Za-z]*/g);
      arr[key] = count;
      return arr;
    }
    if (val in arr) {
      arr[val]++;
    } else {
      arr[val] = 1;
    }
    return arr;
  }
  var array = collection.reduce(selector, {});
  var res = [];
  for (var obj in array) {
    var temp = new Object();
    temp.key = obj;
    temp.count = array[obj];
    res.push(temp);
  }
  return res;
}

module.exports = count_same_elements;
