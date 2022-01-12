function solution(s) {
  const midLength = Math.floor(s.length / 2);
  return s.length % 2 === 0 ? s.substring(midLength - 1, midLength + 1) : s[midLength];
}

console.log(solution('study'));
console.log(solution('good'));
