/**
 * 돌다리 건너기
 */

function solution1(n = 7) {
  let answer = 0;

  function DFS(sum) {
    if (sum >= 7) {
      answer++;
    } else {
      DFS(sum + 1);
      DFS(sum + 2);
    }
  }

  DFS(0);

  return answer;
}

console.log(solution1(7));

function solution1(n = 7) {
  let answer = 0;
  let dy = Array.from({ length: n + 1 }, () => 0);

  dy[1] = 1;
  dy[2] = 2;

  for (let i = 3; i <= n + 1; i++) {
    dy[i] = dy[i - 1] + dy[i - 2];
  }

  answer = dy[n + 1];

  return answer;
}

console.log(solution1(7));
