/**
 * 최대 매출
 */

function solution1(k = 3, arr = [1, 2, 3]) {
  let n = arr.length;
  let sum = 0;
  let max = 0;

  for (let i = 0; i < n; i++) {
    if (i < k) {
      sum += arr[i];
    } else {
      sum += arr[i];
      sum -= arr[i - k];
    }

    if (sum > max) max = sum;
  }

  return max;
}

console.log(solution1(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));
