function solution(arr) {
  return arr.filter((v, i) => {
    if (i === 0) return true;
    return v > arr[i - 1];
  });
}

let arr = [7, 3, 9, 5, 6, 12];

console.log(solution(arr));
