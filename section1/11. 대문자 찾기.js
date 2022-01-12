function solution(str) {
  let cnt = 0;
  const upperReg = /[A-Z]/;

  for (let s of str) {
    if (s.match(upperReg)) cnt++;
  }
  return cnt;
}

function solution2(str) {
  let cnt = 0;

  for (let s of str) {
    if (s.toUpperCase() === s) cnt++;
  }
  return cnt;
}

let str = 'KoreaTimeGood';

console.log(solution(str));
console.log(solution2(str));
