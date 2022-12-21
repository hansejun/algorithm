// 나의 코드 ( 100만 기준 성능 40%  이상 차이)
// function solution(number, limit, power) {
//   const set = new Set(
//     Array(number)
//       .fill(1)
//       .map((num, idx) => num + idx)
//   );
//   const arr = [];
//   let initial = 1;
//   while (initial <= number) {
//     if (set.has(initial)) {
//       const cnt = getYaksu(initial, limit);
//       if (cnt > limit) {
//         for (let i = 1; initial * i <= number; i++) {
//           set.delete(initial * i);
//         }
//       } else {
//         arr.push(cnt);
//       }
//     }
//     initial++;
//   }
//   const result = arr.reduce((a, b) => a + b);
//   const gap = number - arr.length;
//   return gap === 0 ? result : result + gap * power;
// }

// // 약수 개수 알고리즘
// function getYaksu(num, limit) {
//   let cnt = 0;
//   for (let i = 1; i <= Math.sqrt(num); i++) {
//     if (num % i == 0) {
//       cnt++;
//       if (i * i < num) {
//         cnt++;
//       }
//     }
//     if (cnt > limit) break;
//   }
//   return cnt;
// }

// 우수코드
// function solution(number, limit, power) {
//   var answer = 0;
//   for (let n = 1; n <= number; n++) {
//     let count = 0;
//     for (let j = 1; j * j <= n; j++) {
//       if (j * j == n) count++;
//       else if (n % j == 0) count += 2;
//     }
//     if (count > limit) count = power;
//     answer += count;
//   }
//   return answer;
// }

console.time("solution");
console.log(solution(1000000, 6, 2));
console.timeEnd("solution");
