function solution(citations) {
  let result = 0;
  citations = citations.sort((a, b) => a - b);
  for (i = (citations[citations.length - 1] / 2) | 0; i >= 0; i--) {
    let up = citations.filter((item) => item >= i).length;
    let remainder = citations.length - up;
    if (up >= i && remainder <= i) {
      result = i;
      break;
    }
  }
  return result;
}

// 다른 사람의 풀이 (압도적으로 빠르다.)
// 나는 반복문 안에서 filter()를 사용해 n제곱의 시간복잡도를 가졌지만 아래의 풀이는 n의 폭잡도로 해결하였다.
/**
 function solution(citations) {
     citations = citations.sort(sorting);
     var i = 0;
     while(i + 1 <= citations[i]){
         i++;
     }
     return i;


     function sorting(a, b){
         return b - a;
     }
}
 */
