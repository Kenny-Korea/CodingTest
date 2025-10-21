/**
 * 수열 추측하기
 */

function solution1(n = 4, f = 16) {
  let answer = [];

  function DFS(l = 0, sum = 16) {
    if (l === n) {
      answer.push(sum);
      return 1;
    } else {
      if (dy[l][sum] > 0) return dy[l][sum];
      for (let i = 1; i <= sum / 2; i++) {
        dy[l][i] = DFS(l + 1, i);
        dy[l][sum - i] = DFS(l + 1, sum - i);
      }
    }
  }

  DFS(0, 16);

  return answer;
}

console.log(solution1());
