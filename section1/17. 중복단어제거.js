function solution(sArr) {
  return [...new Set(sArr)];
}

function solution2(sArr) {
  return sArr.filter((v, i, arr) => arr.indexOf(v) === i);
}

let str = ['good', 'time', 'good', 'time', 'student'];

console.log(solution(str));
console.log(solution2(str));
