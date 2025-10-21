/**
 *
 */

function count(dist = 3, arr = [1, 2]) {
  let cnt = 1;
  let ep = arr[0];
  for (let x of arr) {
    if (x === arr[0]) continue;

    if (x - ep >= dist) {
      ep = x;
      cnt++;
    }
  }
  return cnt;
}

function solution1(n = 3, arr = [1, 2]) {
  let answer = 0;
  arr.sort((a, b) => a - b);
  let lt = 1;
  let rt = arr.at(-1) - arr[0]; // 8

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2); // 4
    if (count(mid, arr) >= n) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
  return answer;
}

console.log(solution1(3, [1, 2, 8, 4, 9]));
