/**
 * 연속 부분수열 2
 */

function solution1(m = 5, arr = [1, 2]) {
  //
  let n = arr.length,
    sum = 0,
    lt = 0;
  answer = 0;

  for (let rt = 0; rt < n; rt++) {
    sum += arr[rt];
    if (sum <= m) answer += rt - lt + 1;

    while (sum > m) {
      sum -= arr[lt++];
    }
    console.log(sum);
  }

  return answer;
}

console.log(solution1(5, [1, 3, 1, 2, 3]));
