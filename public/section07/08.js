/**
 * 회의실 배정 (정렬 + 그리디)
 */

/// 끝나는 시간이 작은 순서대로 정렬을 해야 함
function solution1(
  arr = [
    [1, 2],
    [3, 4],
  ]
) {
  let answer = 0;
  arr.sort((a, b) => {
    // 끝나는 시간이 같은 애들이 있는 경우는, 시작 시간이 작은 기준으로 정렬
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1]; // 그 외에는 끝나는 시간이 작은 기준으로 정렬
  });

  let et = 0;
  for (let x of arr) {
    if (x[0] >= et) {
      answer++;
      et = x[1];
    }
  }
  return answer;
}

console.log(
  solution1([
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
);
console.log(
  solution1([
    [3, 3],
    [1, 3],
    [2, 3],
  ])
);
