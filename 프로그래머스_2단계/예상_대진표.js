function solution(n, a, b) {
  for (var i = 1, j = n; j >= 2; j = j / 2) {
    [a, b] = [Math.ceil(a / 2), Math.ceil(b / 2)];
    if (a === b) break;
    else i++;
  }
  return i;
}
