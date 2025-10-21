/**
 * 재귀함수를 이용한 이진수 출력
 */

function solution1(t) {
  let arr = [];

  function DFS(num) {
    if (num === 0) return;
    let q = Math.floor(num / 2);
    let r = num % 2;
    DFS(q);
    arr.push(r);
  }
  DFS(t);
  return arr.join("");
}

console.log(solution1(11));
