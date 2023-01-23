function solution(n, words) {
  let result = [];
  let set = new Set([words[0]]);
  for (let i = 1; i < words.length; i++) {
    const prev = words[i - 1];
    const cur = words[i];
    const compare = prev[prev.length - 1] === cur[0];
    const curSize = set.size;
    set.add(words[i]);
    if (!compare || curSize === set.size) {
      result = [(i + 1) % n || n, Math.ceil((i + 1) / n)];
      break;
    }
  }
  return result[0] ? result : [0, 0];
}

/*
function solution(n, words) {
    let answer = 0;
    words.reduce((prev, now, idx) => {
        answer = answer || ((words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0]) ? idx : answer);
        return now[now.length-1];
    }, "")

    return answer ? [answer%n+1, Math.floor(answer/n)+1] : [0,0];
}
*/
