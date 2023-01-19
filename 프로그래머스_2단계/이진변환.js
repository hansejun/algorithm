function solution(s) {
  let loop = 0;
  let cnt = 0;
  while (s.length > 1) {
    let newStr = s.replace(/0/g, "");
    cnt += s.length - newStr.length;
    s = newStr.length.toString(2);
    loop++;
  }

  return [loop, cnt];
}

// 다른 사람 풀이
/*
function solution(s) {
    var answer = [0,0];
    while(s.length > 1) {
        answer[0]++;
        answer[1] += (s.match(/0/g)||[]).length;
        s = s.replace(/0/g, '').length.toString(2);
    }
    return answer;
}
*/
