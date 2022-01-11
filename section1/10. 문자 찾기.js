function solution(s, t) {
  let cnt = 0;
  for (let str of s) {
    if (str === t) cnt++;
  }
  return cnt;
}

function solution2(s, t) {
  return s.split(t).length - 1;
}

let str = 'COMPUTERPROGRAMMING';
console.log(solution(str, 'R'));
console.log(solution2(str, 'R'));
