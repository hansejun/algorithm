function solution(s) {
  if (s[0] === ")" || s[s.length - 1] === "(") return false;
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    if (cnt === 0 && s[i] === ")") return false;
    else if (s[i] === "(") cnt--;
    else if (s[i] === ")") cnt++;
  }
  return cnt === 0;
}

// 다른 사람 풀이 (시간초과)
/*
function solution(s){
    let cum = 0
    for (let paren of s) {
        cum += paren === '('? 1: -1
        if(cum < 0) {
            return false
        }
    }
    return cum === 0? true: false;
}
*/
