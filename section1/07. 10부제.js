function solution(day, arr) {
  const answer = arr.reduce((acc, cur) => (cur % 10 === day ? ++acc : acc), 0);

  return answer;
}

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33]));
console.log(solution(0, [12, 20, 54, 30, 87, 91, 30]));
