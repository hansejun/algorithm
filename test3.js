function test3(arr, n) {
  let obj = {};
  arr.forEach((item) => (obj[item] = (obj[item] || 0) + 1));
  const newArr = arr.filter((item) => obj[item] == 1);
  return newArr.sort().sort((a, b) => a.charCodeAt(n) - b.charCodeAt(n));
}

console.log(test3(["brush", "sun", "brush", "bed", "car"], 1));
console.log(test3(["banana", "cat", "car", "apple", "banana", "banana"], 0));
console.log(
  test3(["coke", "water", "glass", "dog", "dog", "yogurt", "vitamin"], 2)
);
