/**
 * 수들의 조합
 */

function solution1(arr = [1, 2], k = 3, m = 6) {
  let answer = 0;
  let tmp = [];

  function DFS(l = 0, s = 1) {
    if (l === k) {
      let sum = tmp.reduce((acc, cv) => acc + cv, 0);
      if (sum % m === 0) {
        console.log(tmp);
        answer++;
      }
    } else {
      for (let i = s; i <= arr.length; i++) {
        tmp[l] = arr[i];
        DFS(l + 1, i + 1);
      }
    }
  }

  DFS(0, 0);

  return answer;
}

console.log(solution1([2, 4, 5, 8, 12]));

// 맨 마지막에 합을 구하는게 아니라 합을 계속 더해가는 방식으로 (강사님 답 - tmp 변수가 필요 없으므로 더 효율적)
function solution2(arr = [1, 2], k = 3, m = 6) {
  let answer = 0;

  function DFS(l = 0, s = 0, sum = 0) {
    if (l === k) {
      if (sum % m === 0) answer++;
    } else {
      for (let i = s; i <= arr.length; i++) {
        DFS(l + 1, i + 1, sum + arr[i]);
      }
    }
  }

  DFS(0, 0);

  return answer;
}

console.log(solution2([2, 4, 5, 8, 12]));
