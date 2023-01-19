function solution(n) {
  let nextNum = n + 1;
  let nLen = n.toString(2).replace(/0/g, "").length;

  while (true) {
    let nextLen = nextNum.toString(2).replace(/0/g, "").length;
    if (nLen === nextLen) return nextNum;
    nextNum++;
  }
  return nLen;
}

// 다른 사람풀이 (...ㅜㅜ)
/*
function solution(n,a=n+1) {
    return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length ? a : solution(n,a+1);
}
*/
