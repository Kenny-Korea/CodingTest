/**
 * 장난꾸러기 현수
 */

// 선택 정렬 사용하여 풂
function solution1(arr = [1, 2]) {
  let sorted = Array.from(arr);
  let answer = [];

  for (let i = 0; i < sorted.length; i++) {
    let idx = i;
    for (let j = i + 1; j < sorted.length; j++) {
      if (sorted[idx] > sorted[j]) idx = j;
    }
    [sorted[i], sorted[idx]] = [sorted[idx], sorted[i]];
  }

  for (let i = 0; i < sorted.length; i++) {
    if (arr[i] !== sorted[i]) answer.push(i + 1);
  }
  return answer;
}

console.log(solution1([120, 125, 152, 130, 135, 135, 143, 127, 160]));
console.log(solution1([120, 130, 150, 150, 130, 150]));

// 틀림 (입력 예제 2번 기대값이 [3, 5]인데, [4, 0] 출력됨)
function solution2(arr = [1, 2]) {
  let idx = 0;
  let answer = [0, 0];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      if (arr[i + 1] > arr[idx - 1] && arr[i + 1] < arr[idx + 1]) {
        answer[1] = i + 2;
      } else {
        idx = i;
        answer[0] = i + 1;
      }
    }
  }
  return answer;
}

console.log(solution2([120, 125, 152, 130, 135, 135, 143, 127, 160]));
console.log(solution2([120, 130, 150, 150, 130, 150]));
