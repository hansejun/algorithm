function solution(n) {
  let start = 1;
  let end = 2;
  let cnt = 0;
  while (start <= Math.ceil(n / 2)) {
    let gaus = ((start + end) * (end - start + 1) * 1) / 2;
    if (gaus < n) {
      end++;
    } else if (gaus > n) {
      start++;
    } else {
      cnt++;
      ++start;
      end = start + 1;
    }
  }
  return cnt + 1;
}

// 다른 사람풀이 (어렵다...)
/*
function solution(num) {
    var answer = 0;

  for(var i=1; i<=num; i++) {
    if (num%i == 0 && i%2 == 1)
      answer++
  }
    return answer;
}
*/
