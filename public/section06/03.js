/**
 * 크레인 인형뽑기(카카오 기출)
 *
 * 1. 보드를 stack 형태로 재작성
 */

function solution1(arr = [[1], [2]], m = [1]) {
  let answer = 0;
  let stackB = Array.from({ length: 5 }, () => []);
  let stackR = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] !== 0) stackB[j].push(arr[i][j]);
    }
  }

  for (let num of m) {
    let col = stackB[num - 1];
    if (col.length < 1) continue;
    let target = col[col.length - 1];
    col.pop();

    if (stackR.length === 0) {
      stackR.push(target);
      continue;
    }

    if (stackR[stackR.length - 1] === target) {
      answer += 2;
      stackR.pop();
    } else stackR.push(target);
  }
  console.log(stackB);
  return answer;
}

console.log(
  solution1(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
