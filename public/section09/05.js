/**
 * BFS(너비 우선 탐색)
 */

function solution1(n = 7) {
  let answer = [];
  let queue = [];
  queue.push(1);

  while (queue.length) {
    let v = queue.shift();
    answer.push(v);
    for (let nv of [v * 2, v * 2 + 1]) {
      if (nv > n) continue;
      queue.push(nv);
    }
  }
  return answer;
}

console.log(solution1(7));
