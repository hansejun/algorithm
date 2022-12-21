function test2(str, newStr = "", cnt = 0) {
  if (str.length == 0) return newStr;
  let addStr = cnt == 0 || cnt % 2 == 0 ? str[0].toUpperCase() : str[0];
  return str[0] !== " "
    ? test2(str.slice(1), newStr + addStr, ++cnt)
    : test2(str.slice(1), newStr + addStr, cnt);
}

// console.log
console.log(test2("try hello world"));
console.log(test2("yoon ji yong"));
console.log(test2(" hang hae ninety nine"));

// function test2(str) {
//   let newStr = "";
//   str = str.toLowerCase();
//   let cnt = 0;
//   for (i = 0; i < str.length; i++) {
//     if ((cnt == 0 && str[i] !== " ") || (cnt % 2 == 0 && str[i] !== " ")) {
//       newStr += str[i].toUpperCase();
//       cnt++;
//     } else if (str[i] == " ") {
//       newStr += str[i];
//     } else {
//       newStr += str[i];
//       cnt++;
//     }
//   }
//   return newStr;
// }
