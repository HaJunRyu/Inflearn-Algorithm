function solution(a, b, c) {
  return Math.min(a, b, c);
}

console.log(solution(2, 5, 1));

// 내장 함수를 사용하지 않고
function solution2(a, b, c) {
  let answer = a;

  if (b < a) answer = b;

  if (c < answer) answer = c;

  return answer;
}

console.log(solution2(2, 5, 1));
console.log(solution2(6, 5, 11));
