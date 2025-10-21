/**
 * 선택 정렬
 *
 *
 */

function solution1(arr = [1, 2]) {
  let answer = arr; // 얕은 복사 (arr이 바뀌면 answer도 바뀜)
  for (let i = 0; i < arr.length; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) idx = j;
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]]; // 최신 JS에서는 temp 변수를 사용하지 않고 왼쪽과 같은 문법 사용 가능
  }
  return answer;
}

console.log(solution1([13, 5, 11, 7, 23, 15]));
