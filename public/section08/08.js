/**
 * 중복순열 구하기
 */

function solution1(n = 3, m = 2) {
  let answer = 0;
  let tmp = Array.from({ length: m }, () => 0);

  function DFS(l = 0) {
    if (l === m) {
      console.log(tmp);
      answer++;
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[l] = i;
        DFS(l + 1);
      }
    }
  }

  DFS(0);

  return answer;
}

console.log(solution1(3, 2));
