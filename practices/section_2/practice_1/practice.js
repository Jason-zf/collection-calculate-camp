function count_same_elements(collection) {
  //在这里写入代码
  const selector = (arr, val) => {
    if (val in arr) {
      arr[val]++;
    } else {
      arr[val] = 1;
    }
    return arr;
  }
  var array = collection.reduce(selector, {});
  return Object.keys(array).map(key => {
    return {'key': key, 'count': array[key]}
  });
}

module.exports = count_same_elements;
