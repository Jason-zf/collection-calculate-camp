function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  return collection_a.filter(number => collection_b.includes(number));
}

module.exports = collect_same_elements;
