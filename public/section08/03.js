/**
 * 이진트리 순회(깊이 우선 탐색: DFS)
 *
 * 전위 순회: 부 왼 오
 * 중위 순회: 왼 부 오
 * 후위 순회: 왼 오 부
 */

function solution1(n = 1) {
  let answer = [];

  function DFS(v) {
    if (v > 7) {
      return;
    } else {
      console.log(v); // 전위 순회
      DFS(v * 2);
      // console.log(v); // 중위 순회
      DFS(v * 2 + 1);
      // console.log(v); // 후위 순회
    }
  }

  DFS(n);
}

console.log(solution1(1));
