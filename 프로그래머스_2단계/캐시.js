function solution(cacheSize, cities) {
  if (cacheSize < 1) return cities.length * 5;
  const set = new Set();
  let time = 0;
  for (let i = 0; i < cities.length; i++) {
    let lowerCity = cities[i].toLowerCase();
    if (set.has(lowerCity)) {
      set.delete(lowerCity);
      time++;
    } else {
      if (set.size === cacheSize) set.delete([...set][0]);
      time += 5;
    }
    set.add(lowerCity);
  }
  return time;
}

// 처음에는 배열로 접근을 하였는데 set을 사용해 나름 ? 최적화를 시켜봤다. 하지만 아쉽게도 11번째 줄에서 비효율적인 코드를 사용할 수 밖에 없었다. ㅠ
