/**
 * 최대점수 구하기 (냅색 알고리즘)
 */

function solution1(t = 20, arr = [[1, 2]]) {
  let answer = 0;
  let dy = Array.from({ length: t + 1 }, () => 0);

  // dy[0] = 0;
  // dy[1] = 0;
  // dy[2] = 0;

  for (let i = 0; i < arr.length; i++) {
    let ps = arr[i][0];
    let pt = arr[i][1];
    for (let j = pt; j <= t; j++) {
      dy[j] = Math.max(dy[j], dy[j - pt] + ps);
    }

    answer = dy[t];
    console.log(dy);
    return answer;
  }

  return answer;
}

console.log(
  solution1(20, [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ])
);
