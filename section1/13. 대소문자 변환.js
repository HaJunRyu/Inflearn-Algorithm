function solution(str) {
  let answer = '';

  for (let s of str) {
    answer += s === s.toUpperCase() ? s.toLowerCase() : s.toUpperCase();
  }
  return answer;
}

console.log(solution('StuDY'));
