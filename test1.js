function test1(num) {
  let arr = Array(10)
    .fill(0)
    .map((item, i) => item + i);
  let [min, max] = arr.filter((item) => !num.includes(item));
  return ((min + max) * (Math.abs(max - min) + 1)) / 2;
}

console.log(test1([1, 2, 4, 6, 7, 8, 9, 0]));
console.log(test1([7, 8, 3, 5, 6, 1, 2, 4]));


