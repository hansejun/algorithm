// 콜백 함수
// 파라미터로 전달하는 함수를 말한다.

let arr = [1, 2, 3, 4, 5];

//forEach
//  arr.forEach((value,index,array)=> { ... })
// value는 배열의 요소, index는 배열의 인덱스 0에서부터 배열의 길이-1까지 순차적으로 1씩 증가한다.
//  arr.forEach(function(value,index,array){
//    ...
//  })

let arr2 = arr.forEach((value) => value + 1);
console.log(arr2); // undefined

//map
// 콜백함수에서 리턴한 값들을 기반으로 새로운 배열을 만드는 함수
// arr.map((value,index,array)=> ...){}
// arr.map(function(value,index,array){
//   return ...
// })

let arr3 = arr.map((value) => value + 1);
console.log(arr3); // [2,3,4,5,6]

// filter
// 리턴하는 값이 true인 것들만 모아서 새로운 배열을 만드는 함수
// arr.filter((value,index,array) => ...)
// arr.filter(function(value,index,array){
//  return boolean;
// })

let arr4 = arr.filter((value) => value > 2);
console.log(arr4); // [3,4,5]

arr4 = arr.filter((value) => {
  value > 2;
});
console.log(arr4); // []

// 화살표 함수
// 단순한 형태의 골백 함수를 쉽게 입력하는 함수 생성 방법 (화살표 함수)
// 내부에서 this 키워드가 지칭하는 대상이 다르다. (호출한 위치에서의 객체를 참조)
// 화살표 함수를 메소드 내부에서 사용할 경우 기본적으로 this 키워드가 window 객체를 나타낸다.

// function hello1(name) {
//   return `Hello! ${name}`;
// }

// const hello2 = (name) => `Hello! ${name}`;

// console.log(hello1("sejun"));
// console.log(hello2("sejun"));

// const obj = {
//   name: "sejun",
//   hello1: () => this.name,
//   hello2: function () {
//     return this.name;
//   },
// };

// this.name = "kim";

// console.log("hello1", obj.hello1()); // undefined
// console.log("hello2", obj.hello2()); // "hello2 sejun"

//setTimeout(콜백함수,시간)
// 시간은 밀리세컨드. 1000 => 1초
// 한번만 실행
setTimeout(() => console.log("hello"), 2000);

//setTimeout(콜백함수,시간)
// 두 번째 파라미터에 담긴 시간마다 콜백함수를 실행
// setInterval(() => console.log("hello"), 1000);

// let time = setInterval(() => console.log("hello"), 1000);

// setTimeout(() => {
//   console.log("종료");
//   clearInterval(time);
// }, 5000);

// 익명함수
// 순차적으로 코드실행에서 코드가 해당 줄을 읽을 때 생성.
// 함수를 생성하기 전 함수를 호출하게 되면 에러가 발생한다.
fn1(); //  Cannot access 'fn1' before initialization
let fn1 = function () {};

// 선언적 함수
// 순차적인 코드 실행이 일어나기 전에 생성. 같은 블록 어디에서 함수를 호출해도 된다.
fn2(); // 잘 작동한다.
let fn2 = function () {};
