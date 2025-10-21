/**
 * 경로 탐색 (인접 리스트)
 *
 * 인접 리스트를 사용하는 이유: 노드의 개수가 많아질 수록 더 많은 반복문을 돌아야 하므로 인접 행렬을 이용할 경우, 매우 비효율적
 */

function solution1(n = 5, arr = [[1, 2]]) {
  let answer = 0;
  let g = Array.from(Array(n + 1), () => Array());
  let ch = Array.from({ length: n + 1 }, () => 0);

  for (let [a, b] of arr) {
    g[a].push(b);
  }

  function DFS(v = 1) {
    if (v === n) answer++;
    else {
      for (let i = 0; i < g[v].length; i++) {
        let next = g[v][i];
        if (ch[next] === 0) {
          ch[next] = 1;
          DFS(next);
          ch[next] = 0;
        }
      }
    }
  }
  ch[1] = 1;
  DFS(1);

  return answer;
}
console.log(
  solution1(5, [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
  ])
);
