/**
 * 송아지 찾기(BFS : 상태트리탐색)
 */

function solution(s, e) {
  let answer = 0;
  let ch = Array.from({ length: 10001 }, () => 0); // 이미 해당 값을 검사했는지 체크하는 배열
  let dis = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  queue.push(s);
  ch[s] = 1;
  dis[s] = 0;
  while (queue.length) {
    let x = queue.shift();
    for (let nx of [x - 1, x + 1, x + 5]) {
      // [4, 6, 10]
      if (nx === e) return dis[x] + 1;
      if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
        ch[nx] = 1;
        queue.push(nx);
        dis[nx] = dis[x] + 1;
      }
    }
  }
  return answer;
}

function bfs(s = 0, e = 0) {
  let ch = Array(10001).fill(0);
  let dist = Array(10001).fill(0);
  let queue = [];

  queue.push(s);
  ch[s] = 1;
  dist[s] = 0;

  while (queue.length) {
    let x = queue.shift(); // 5
    for (let nx of [x - 1, x + 1, x + 5]) {
      // [4, 6, 10]
      if (nx === e) return dist[x] + 1;
      if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
        queue.push(nx);
        ch[nx] = 1;
        dist[nx] = dist[x] + 1;
      }
    }
  }
}
console.log(bfs(8, 3));
// console.log(solution(5, 14));
