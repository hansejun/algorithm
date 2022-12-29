function solution(k, tangerine) {
  let sizes = {};
  for (let i = 0; i < tangerine.length; i++) {
    sizes[tangerine[i]] = sizes[tangerine[i]] + 1 || 1;
  }
  const sizesArr = Object.entries(sizes).sort((a, b) => a[1] - b[1]);
  let result = new Set();
  while (k > 0) {
    k = k - sizesArr[sizesArr.length - 1][1];
    result.add(sizesArr[sizesArr.length - 1][0]);
    sizesArr.pop();
  }
  return result.size;
}
