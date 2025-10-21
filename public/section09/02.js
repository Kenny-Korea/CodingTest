/**
 * 경로 탐색(인접 행렬)
 */

function solution1(t = 5, arr = [[1, 2]]) {
  let answer = 0;
  let mat = Array.from({ length: t + 1 }, () => Array(t + 1).fill(0));
  let ch = Array.from({ length: t + 1 }, () => 0);
  let path = [];

  // for (let x of arr) {
  //   mat[x[0]][x[1]] = 1;
  // }

  /// 아래와 같이 간편하게 표현할 수 있음
  for (let [a, b] of arr) {
    mat[a][b] = 1;
  }

  function DFS(l = 1) {
    if (l > t) return;
    if (l === t) {
      answer++;
      console.log(path);
    } else {
      for (let i = 1; i < mat[l].length; i++) {
        if (mat[l][i] === 1 && ch[i] === 0) {
          ch[i] = 1;
          path.push(i);
          DFS(i);
          ch[i] = 0;
          path.pop();
        }
      }
    }
  }
  path.push(1);
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
