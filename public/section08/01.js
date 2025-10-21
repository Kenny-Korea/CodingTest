/**
 * 재귀함수
 */

function solution1(n = 3) {
  if (n === 0) return;
  else {
    solution1(n - 1);
    console.log(n);
  }
}

console.log(solution1(3));
