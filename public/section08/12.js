/**
 * 조합의 경우의 수 (메모이제이션)
 */

function solution1(n = 5, r = 3) {
  let answer = 1;

  function DFS(l = 0, k = 5) {
    if (l === 3) return 1;
    else {
      return k * DFS(l + 1, k - 1);
    }
  }

  answer = (answer * DFS(0, n)) / DFS(0, r);

  return answer;
}

console.log(solution1(5, 3));

function solution2(n = 5, r = 3) {
  let answer;
  let dy = Array.from(Array(35), () => Array(35).fill(0));

  function DFS(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  }

  answer = DFS(n, r);
  return answer;
}

console.log(solution2(5, 3));
console.log(solution2(33, 19)); // 818,809,200
