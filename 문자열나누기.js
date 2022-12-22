// 재귀를 통한 해결법
function solution(s, result = 0) {
  if (s.length === 0) return result;
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[0] === s[i]) cnt++;
    else cnt--;
    if (cnt === 0 || i + 1 === s.length) {
      return solution(s.slice(i + 1), ++result);
    }
  }
}

// 포인터를 이용한 해결볍
function solution2(s) {
  let result = 0;
  let start = 0;
  let cnt = 0;
  while (s.length > 0) {
    if (s[0] === s[start]) {
      cnt++;
    } else {
      cnt--;
    }
    if (cnt === 0) {
      s = s.slice(start + 1);
      start = 0;
      cnt = 0;
      result++;
    } else {
      start++;
    }
  }
  return result;
}

let word =
  "aaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabba";

console.time("solution2");
console.log(solution2(word));
console.timeEnd("solution2");

// console.time("solution");
// console.log(solution(word));
// console.timeEnd("solution");
