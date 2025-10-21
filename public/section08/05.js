/**
 * 합이 같은 부분집합
 */

// 올바른 답을 구하기는 하지만, 중복된 답을 걸러내지는 못하고 있음
// 양쪽으로 갈래를 나누면 2개씩 중복이 발생
function solution1(arr = [1, 3, 5, 6, 7, 10]) {
  let ch = Array.from({ length: arr.length }, () => 0);

  function DFS(v = 0) {
    if (v === arr.length) {
      //
      let sum1 = arr.reduce((acc, cv, ci) => {
        if (ch[ci] === 1) {
          return acc + cv;
        } else {
          return acc;
        }
      }, 0);
      let sum2 = arr.reduce((acc, cv, ci) => {
        if (ch[ci] === 0) {
          return acc + cv;
        } else {
          return acc;
        }
      }, 0);
      if (sum1 === sum2) console.log(ch);
    } else {
      ch[v] = 1;
      DFS(v + 1);
      ch[v] = 0;
      DFS(v + 1);
    }
  }

  DFS(0);
}

console.log(solution1([1, 3, 5, 6, 7, 10]));

function solution2(arr = [1, 3, 5, 6, 7, 10]) {
  let answer = "NO";
  let tot = arr.reduce((acc, cv) => acc + cv);
  if (tot % 2 === 1) return answer;

  let found = false;
  let target = tot / 2;

  function DFS(l = 0, sum = 0) {
    if (found) return;
    if (l === arr.length) {
      if (sum === target) {
        answer = "YES";
        found = true;
      }
    } else {
      DFS(l + 1, sum + arr[l]);
      DFS(l + 1, sum);
    }
  }

  DFS(0, 0);
  return answer;
}

console.log(solution2([1, 3, 5, 6, 7, 10]));
