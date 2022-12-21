function solution(number) {
  const set = new Set(
    Array(number)
      .fill(1)
      .map((num, idx) => num + idx)
  );
  return set.size;
}

function solution2(number) {
  const set = new Set();
  for (let i = 1; i <= number; i++) {
    set.add(i);
  }
  return set.size;
}

console.time("solution");
console.log(solution(1000000, 6, 2));
console.timeEnd("solution");

console.time("solution2");
console.log(solution(1000000, 6, 2));
console.timeEnd("solution2");
