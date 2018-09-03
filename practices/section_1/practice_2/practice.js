function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  return collection_a.filter(number => collection_b.filter(sub => sub.includes(number)).length > 0);
}

module.exports = collect_same_elements;
