function solution(num1, num2) {
  num1.sort((a, b) => a - b);
  num2.sort((a, b) => b - a);
  return num1.reduce((a, b, i) => a + b * num2[i], 0);
}
