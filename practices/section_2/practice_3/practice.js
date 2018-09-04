function count_same_elements(collection) {
  //在这里写入代码
  const selector = (arr, val) => {
    var count = Number.isNaN(parseInt(val.replace(/[^0-9]/g, ''))) === true ? 1 : parseInt(val.replace(/[^0-9]/g, ''));
    var key = val.match(/^[A-Za-z]*/g);

    if (key in arr) {
      arr[key] += count;
    } else {
      arr[key] = count;
    }
    return arr;
  }
  var array = collection.reduce(selector, {});
  var res = [];
  for (var obj in array) {
    var temp = new Object();
    temp.name = obj;
    temp.summary = array[obj];
    res.push(temp);
  }
  return res;
}

module.exports = count_same_elements;
