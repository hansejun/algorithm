function solution(s) {
  s = s.split(" ").map((a) => +a);
  return `${Math.min(...s)} ${Math.max(...s)}`;
}
