function solution(n) {
  let arr = Array(n + 2).fill(0);
  arr[1] = 1;
  for (i = 2; i < n + 2; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567;
  }
  return arr[n + 1];
}
