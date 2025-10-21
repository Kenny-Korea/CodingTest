/**
 * 부분집합 구하기(DFS)
 */

function solution1(n = 3) {
  let ch = Array.from({ length: n + 1 }, () => 0); // 체크 배열
  let answer = [];

  function DFS(v = 1) {
    if (v === n + 1) {
      let tmp = [];
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) tmp.push(i);
      }
      if (tmp.length > 0) answer.push(tmp);
    } else {
      // 포함하는 부분집합(왼쪽)
      ch[v] = 1;
      DFS(v + 1);

      // 포함하지 않는 부분집합(오른쪽)
      ch[v] = 0;
      DFS(v + 1);
    }
  }

  DFS(1);
  return answer;
}

console.log(solution1(3));
