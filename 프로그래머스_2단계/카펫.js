function solution(brown, yellow) {
  let result = [];

  for (let i = 1; i <= yellow; i++) {
    if (yellow % i !== 0) continue;
    let big = yellow / i;
    let compare = (big + 2) * 2 + i * 2 === brown;
    if (compare) {
      result = [big + 2, i + 2];
      break;
    }
  }
  return result;
}

// 다른 사람 풀이

// function solution(brown, red) {
//   var answer = [];
//   for (var i = 3; i <= (brown+red)/i; i++) {
//       var x = Math.floor((brown+red)/i);
//       if( (x-2)*(i-2)=== red) {
//           break;
//       }
//   }

//   return [x,i];
// }
