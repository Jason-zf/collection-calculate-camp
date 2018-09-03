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
  return collection.reduce(selector, {});
}

module.exports = count_same_elements;
