function solution(a, b, c) {
  let answer = 'YES';

  const longestSide = Math.max(a, b, c);
  const sum = a + b + c;

  if (longestSide >= sum - longestSide) answer = 'NO';

  return answer;
}

console.log(solution(13, 33, 17));
console.log(solution(16, 33, 17));
console.log(solution(6, 7, 11));
