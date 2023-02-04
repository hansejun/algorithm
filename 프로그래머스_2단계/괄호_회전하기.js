function solution(s) {
  if (s.length % 2 !== 0) return 0;
  const stack = [];
  let result = 0;
  let isHas = new Set(["(", "{", "["]);

  for (let i = 0; i < s.length; i++) {
    s = s.slice(1) + s[0];
    let isRight = true;
    for (let word of s) {
      if (isHas.has(word)) stack.push(word);
      else {
        let leftWord = stack.pop();
        if (word === ")" && leftWord === "(") continue;
        if (word === "}" && leftWord === "{") continue;
        if (word === "]" && leftWord === "[") continue;
        isRight = false;
        break;
      }
    }
    if (isRight) result++;
  }
  return result;
}
