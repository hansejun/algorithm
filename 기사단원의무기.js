// // // // 나의 코드 ( 1000만 기준 13s)
// function solution(number, limit, power) {
//   const set = new Set();
//   for (i = 1; i <= number; i++) {
//     set.add(i);
//   }
//   let result = 0;
//   let initial = 1;
//   while (initial <= number) {
//     if (set.has(initial)) {
//       const cnt = getYaksu(initial, limit);
//       if (cnt > limit) {
//         for (let i = 1; initial * i <= number; i++) {
//           set.delete(initial * i);
//         }
//       } else {
//         result += cnt;
//       }
//     }
//     initial++;
//   }
//   const gap = number - set.size;
//   return gap === 0 ? result : result + gap * power;
// }

// // // 약수 개수 알고리즘
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

//우수코드 (1000만 기중 30s)
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

// 준혁님 코드
function solution(number, limit, power) {
  const divisors = new Array(number + 1).fill(0);
  // [0,0,0,0,0,0]
  for (let i = 1; i <= number; i++) {
    for (let j = i; j <= number; j += i) {
      divisors[j]++;
    }
  }
  let iron = 0;
  for (let i = 1; i <= number; i++) {
    if (divisors[i] > limit) {
      iron += power;
    } else {
      iron += divisors[i];
    }
  }
  return iron;
}

console.time("solution");
console.log(solution(100000, 6, 2));
console.timeEnd("solution");
