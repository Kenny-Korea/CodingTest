/**
 * 미로탐색
 */

function solution1(arr = [[1, 2]]) {
  let answer = 0;
  let dx = [0, 0, -1, 1];
  let dy = [-1, 1, 0, 0];
  let lx = arr[0].length;
  let ly = arr.length;
  let cnt = 0;

  function DFS(x, y) {
    if (x === lx - 1 && y === ly - 1) answer++;
    else {
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (nx >= 0 && nx < lx && ny >= 0 && ny < ly && arr[nx][ny] === 0) {
          arr[nx][ny] = 1; // 왔던 길은 막아줌
          cnt++;
          DFS(nx, ny);
          arr[nx][ny] = 0;
        }
      }
    }
  }

  arr[0][0] = 1;
  DFS(0, 0);
  console.log(cnt);
  return answer;
}

const grid = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution1(grid));
