function solution(s) {
  s = s.replace(/[\{|\}]/g, (a) => (a === "{" ? "[" : a === "}" ? "]" : a));
  const arr = JSON.parse(s)
    .sort((a, b) => a.length - b.length)
    .flat();
  return [...new Set(arr)];
}
