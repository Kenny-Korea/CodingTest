/**
 *
 */

function solution1(arr = [1, 2]) {
  let answer = 0;
  let dy = Array.from({ length: arr.length }, () => 0);

  dy[0] = 1;

  for (let i = 1; i < arr.length; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) max = Math.max(max, dy[j]);
    }
    dy[i] = max + 1;
    answer = Math.max(answer, dy[i]);
  }

  return answer;
}

console.log(solution1([2, 7, 5, 8, 6, 4, 7, 12, 3])); // 5 (2, 5, 6, 7, 12)
console.log(solution1([5, 3, 7, 8, 6, 2, 9, 4])); // 4 (3, 7, 8, 9), (5, 7, 8, 9)
