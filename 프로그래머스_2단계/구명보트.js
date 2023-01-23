function solution(people, limit) {
  let cnt = 0;
  people = people.sort((a, b) => a - b);

  while (people.length > 0) {
    let lastIdx = people.length - 1;
    if (!(people[lastIdx] + people[0] > limit)) people.shift();
    people.pop();
    cnt++;
  }
  return cnt;
}

// 다른 사람 풀이
/**
function solution(people, limit) {
    people.sort(function(a, b){return a-b});
    for(var i=0, j=people.length-1; i < j; j--) {
        if( people[i] + people[j] <= limit ) i++;
    }    
    return people.length-i;
}
 */
