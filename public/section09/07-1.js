/**
 * 섬나라 아일랜드 (DFS)
 */

function solution1(arr = [[1, 2]]) {
  let answer = 0;
  let dx = [-1, 0, 1, 1, 1, 0, -1, -1];
  let dy = [-1, -1, -1, 0, 1, 1, 1, 0];

  function DFS(x = 0, y = 0) {
    arr[x][y] = 0;
    for (let k = 0; k < 8; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && arr[nx][ny] === 1) {
        DFS(nx, ny);
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] === 1) {
        arr[i][j] = 0;
        answer++;
        DFS(i, j);
      }
    }
  }

  return answer;
}

const matrix = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution1(matrix));
