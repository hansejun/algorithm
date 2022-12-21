// 두 개의 정렬된 배열을 합쳐 정렬
// [1, 30, 49, 52, 89], [2, 4, 46, 53, 392]
// merge 0.008541002869606018
// sort 0.01812499761581421

// 병합정렬과 sort메소드의 시간 비교

/*
1만기준 
sort 3.338500000536442
merge2 8.915375001728535

7만기준
sort 24.215415999293327
merge 20.583250001072884
merge2 15.643166996538639

10만 기준
sort 24.07820799946785
merge2 20.25170800089836

100만 기준
sort 216.03041699528694
merge2 186.48725000023842
*/

let food = Array.from({ length: 9 }, () => Math.floor(Math.random() * 1000));

/**오리지널 mergeSort */
function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}
function mergeSort2(arr) {
  if (arr.length === 1) return arr;
  const mid = Math.ceil(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort2(left), mergeSort2(right));
}

/**
 mergesort2가 더 빠르다.

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
 */

/**그냥 sort */
function sort(arr) {
  arr = arr.sort((a, b) => a - b);
  return arr;
}

// 테스트------------------------------
let start = performance.now();
sort(arr3_test);
let end = performance.now();
console.log("sort", end - start);

// start = performance.now();
// mergeSort(arr3_test);
// end = performance.now();
// console.log("merge", end - start);

start = performance.now();
mergeSort2(arr3_test);
end = performance.now();
console.log("merge2", end - start);

// 오늘의 결론: 데이터량 10만 이상으로 (?) 많아질수록 병합정렬이 효율적으로 보인다.
// 실행환경에 따라 다른 결과값이 나올 수도 있기 때문에 정확하지는 않다.
