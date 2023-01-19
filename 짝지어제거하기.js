function solution(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    stack[stack.length - 1] === s[i] ? stack.pop() : stack.push(s[i]);
  }
  return stack.length == 0 ? 1 : 0;
}

// s에 split()을 사용하여 forEach를 돌렸을 때는 시간초과.
// 배열 메소드를 사용하여 시간초과...
// 문자열로 충분히 할 수 있는 것들은 굳이 배열로 바꾸지 말자!
