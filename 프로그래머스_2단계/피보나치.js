function solution(n) {
  let arr = Array(n + 1).fill(0);
  arr[1] = 1;
  for (i = 2; i < n + 1; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567;
  }
  return arr[n];
}

// 다른 사람풀이 (재귀로 풀었을 때 시간 초과)
/*
function solution(n) {
  if(n < 2) return n;
  return solution(n-1) + solution(n-2);
}
*/
