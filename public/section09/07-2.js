/**
 * 섬나라 아일랜드 (BFS)
 */

function solution1(arr = [[1, 2]]) {
  let answer = 0;
  let dx = [-1, 0, 1, 1, 1, 0, -1, -1];
  let dy = [-1, -1, -1, 0, 1, 1, 1, 0];
  let lx = arr[0].length;
  let ly = arr.length;
  let q = [];

  for (let i = 0; i < ly; i++) {
    for (let j = 0; j < lx; j++) {
      if (arr[i][j] === 1) {
        arr[i][j] = 0;
        q.push([i, j]);
        answer++;
        while (q.length) {
          let v = q.shift(); // [0, 0]
          for (let k = 0; k < 8; k++) {
            let nx = v[0] + dx[k];
            let ny = v[1] + dy[k];
            if (nx >= 0 && nx < lx && ny >= 0 && ny < ly && arr[nx][ny] === 1) {
              arr[nx][ny] = 0;
              q.push([nx, ny]); // 새로운 값을 넣어줌으로써, Queue가 빌 때까지 while문이 계속 돌게 됨
            }
          }
        }
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
