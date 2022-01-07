function solution(arr) {
  const sum = arr.reduce((acc, cur) => acc + cur, 0);

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(j, 1);
        arr.splice(i, 1);
        return arr;
      }
    }
  }

  return arr;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];

console.log(solution(arr));
