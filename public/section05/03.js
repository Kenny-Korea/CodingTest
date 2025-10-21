/**
 * 연속 부분수열 1
 */

/// O(n^2)의 비효율적 풀이 (내 답 ㅠㅠ)
function solution1(m = 6, arr = [1, 2, 3]) {
  let answer = 0;
  let n = arr.length;
  let p1 = (p2 = 0);

  while (p1 < n) {
    let acc = 0;

    for (let i = p1; i <= p2; i++) {
      acc += arr[i];
    }

    if (acc < m) p2 += 1;
    else {
      if (acc === m) answer += 1;
      p1 += 1;
      p2 = p1;
    }
  }
  return answer;
}

console.log(solution1(6, [1, 2, 1, 3, 1, 1, 1, 2]));

//

function solution2(m = 6, arr = [1, 2, 3]) {
  let answer = 0;
  let n = arr.length;
  let lt = 0;
  let sum = 0;

  for (let rt = 0; rt < n; rt++) {
    sum += arr[rt];

    if (sum === m) answer += 1;

    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) answer += 1;
    }
  }
  return answer;
}

console.log(solution2(6, [1, 2, 1, 3, 1, 1, 1, 2]));
