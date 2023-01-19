function solution(s) {
  s = s.toLowerCase();
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (i === 0) result += s[i].toUpperCase();
    else if (s[i - 1] === " " && s[i] !== " ") result += s[i].toUpperCase();
    else result += s[i];
  }
  return result;
}

// 다른사람 풀이
/* 
function solution(s) {
    return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
}
*/
