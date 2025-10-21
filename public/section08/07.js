/**
 * 최대점수 구하기
 */

function solution1(n = 20, arr = [[1, 2]]) {
  let answer = Number.MIN_SAFE_INTEGER;

  function DFS(l = 0, score = 0, time = 0) {
    if (time > n) return;
    if (l === arr.length) {
      answer = Math.max(answer, score);
    } else {
      DFS(l + 1, score + arr[l][0], time + arr[l][1]);
      DFS(l + 1, score, time);
    }
  }

  DFS(0, 0, 0);

  return answer;
}

console.log(
  solution1(20, [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ])
);
