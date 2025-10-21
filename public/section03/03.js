/**
 * 숫자만 출력
 */

function solution(text) {
  let nums = '';
  for (let char of text) {
    if (!isNaN(parseInt(char))) {
      nums += char;
    }
  }

  return parseInt(nums);
}

console.log(solution('g0en2T0s8eSoft'));
console.log(solution('tge0a1h205er'));
