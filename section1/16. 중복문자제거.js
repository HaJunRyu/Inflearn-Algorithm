function solution(str) {
  let answer = '';

  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === i) answer += str[i];
  }

  return answer;
}

function solution2(str) {
  return [...new Set(str)].join('');
}

function solution3(str) {
  return str
    .split('')
    .filter((v, i, arr) => arr.indexOf(v) === i)
    .join('');
}

console.log(solution('ksekkset'));
console.log(solution2('ksekkset'));
console.log(solution3('ksekkset'));
