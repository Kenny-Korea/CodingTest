/**
 * 계단오르기
 */

function solution1(n = 7) {
  let answer = 0;

  function DFS(sum) {
    if (sum > n) return;
    if (sum === n) {
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
