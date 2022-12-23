function solution(progresses, speeds) {
  // 100을 넘었다면 progresses와 speeds 배열의 앞쪽 요소들 삭제
  // 그리고 삭제된 갯수를 answer 배열에 추가
  let answer = [];

  while (true) {
    let days = 0;
    let cnt = 0;
    // 가장 앞쪽에 있는 요소가 100이 될때까지 스피드를 추가
    for (i = progresses[0]; i < 100; i += speeds[0], days++);
    progresses = progresses.map((item, i) => item + speeds[i] * days);

    // 맨앞 요소가 100이 되었을 때 그 바로 뒤에 있는 숫자가 100을 넘었는지 체크
    // 만약 100이 넘었다면 다시 그 바로 뒤에 있는 숫자가 100을 넘었는지 체크
    for (i = 0; i < progresses.length; i++) {
      if (progresses[i] < 100) break;
      cnt++;
    }
    if (cnt == 0) return answer;
    progresses = progresses.slice(cnt);
    speeds = speeds.slice(cnt);
    answer.push(cnt);
  }
  return answer;
}
console.time("solution");
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
console.timeEnd("solution");
