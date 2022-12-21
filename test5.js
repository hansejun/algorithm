const arr = [
  { id: 1, isDone: true },
  { id: 2, isDone: false },
];

const arr1 = arr.filter((item) => !item.isDone);

console.log(arr1);
