/**
 *
 */

function solution(arr = []) {
  let max = Number.MIN_SAFE_INTEGER;
  let answer = 0;

  for (let num of arr) {
    let q = num;
    let sum = 0;
    while (true) {
      r = q % 10;
      sum += r;
      q = Math.floor(q / 10);
      if (q < 1) break;
    }

    if (sum > max) {
      max = sum;
      answer = num;
    }

    if (sum === max) {
      if (num > answer) {
        answer = num;
      }
    }
  }

  return answer;
}

console.log(solution([137, 460, 603, 40, 521, 128, 123]));
