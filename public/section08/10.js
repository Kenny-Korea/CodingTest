/**
 * 순열 구하기
 */

function solution1(n = 2, arr = [3, 6, 9]) {
  let answer = 0;
  let tmp = Array.from({ length: n }, () => 0);
  let ch = Array.from({ length: arr.length }, () => 0);

  function DFS(l = 0) {
    if (l === n) {
      console.log(tmp);
      // ch = Array.from({ length: arr.length }, () => 0); // 여기서 초기화를 하는게 아니라 아래의 ch[i] = 0에서 초기화
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (ch[i] === 1) continue;
        ch[i] = 1;
        tmp[l] = arr[i];
        DFS(l + 1);
        ch[i] = 0; // 트리에서 뒤로 돌아갈 때, 현재 index 체크 값 초기화
      }
    }
  }

  DFS(0);

  return answer;
}

console.log(solution1(2, [3, 6, 9]));
