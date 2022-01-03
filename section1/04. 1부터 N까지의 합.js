function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    answer += i;
  }

  return answer;
}

console.log(solution(10));
console.log(solution(6));

function solution2(n, answer = 0, cnt = 1) {
  if (n < 1) throw new Error();
  answer += cnt;
  return cnt === n ? answer : solution2(n, answer, ++cnt);
}

console.log(solution2(10));
console.log(solution2(6));
console.log(solution2(0));
