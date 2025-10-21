/**
 * 팩토리얼
 */

function solution1(n = 5) {
  let answer = 1;

  function DFS(l = 0) {
    if (l === 1) {
      return;
    } else {
      answer *= l;
      DFS(l - 1);
    }
  }

  DFS(n);

  return answer;
}

console.log(solution1(5));

// 강사님 답
function solution2(n = 5) {
  let answer = 1;

  function DFS(l = 0) {
    if (l === 1) return 1;
    else return n * DFS(n - 1);
  }

  answer = DFS(n);

  return answer;
}

console.log(solution2(5));
