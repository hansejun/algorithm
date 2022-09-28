// 12345를 1+2+3+4+5로 하나씩 더하는 재귀함수

/*


let num = 9635;
sum1 0.023667000234127045
sum2 0.0355830043554306

let num = 9635325325;
sum1 0.026792004704475403
sum2 0.039500005543231964

let num = 9635325325567456;
sum1 0.028457999229431152
sum2 0.040125004947185516
*/

let num = 9635325325567456;

function sum1(num, result = 0) {
  if (num % 10 == 0) return result;
  result += num % 10;
  return sum1(Math.floor(num / 10), result);
}

// console.log(sum(12345)); // 15
// console.log(sum(1532576)); //29

function sum2(num) {
  return String(num)
    .split("")
    .map((item) => +item)
    .reduce((a, b) => a + b);
}

let start = performance.now();
sum1(num);
let end = performance.now();
console.log("sum1", end - start);

start = performance.now();
sum2(num);
end = performance.now();
console.log("sum2", end - start);
