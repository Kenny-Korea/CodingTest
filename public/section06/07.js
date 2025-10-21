/**
 * 공주 구하기
 */

function solution1(n = 8, k = 3) {
  let arr = Array.from({ length: n }, (v, i) => i + 1);
  let start = k - 1;
  while (arr.length !== 1) {
    arr = arr.splice(start, 1);
    start = start + k;
  }
  return arr;
}

console.log(solution1(8, 3));
