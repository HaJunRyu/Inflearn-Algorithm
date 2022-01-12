function solution(s) {
  return s.reduce((longer, cur) => {
    return longer.length < cur.length ? cur : longer;
  }, '');
}

let str = ['teacher', 'time', 'student', 'beautiful', 'good'];
console.log(solution(str));
