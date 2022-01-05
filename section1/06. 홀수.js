function solution(arr) {
  const odds = arr.filter(n => n % 2 !== 0);

  const sum = odds.reduce((acc, cur) => acc + cur, 0);
  const min = Math.min(...odds);

  return [sum, min];
}

console.log(solution([12, 77, 38, 41, 53, 92, 85]));
