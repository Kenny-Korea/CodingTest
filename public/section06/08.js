/**
 * 교육과정 설계
 *
 * 강사님 답보다 더 퀄리티가 높은 답임
 * - O(n)의 시간 복잡도를 가짐
 * - 배열의 재정렬이 필요한 shift 메서드를 사용하지 않고도 포인터 변수를 이용하여 문제 해결
 */

function solution1(t = "CBA", s = "CBDAGE") {
  let queue = t.split("");
  let p = 0;

  for (let char of s) {
    if (queue[p] === char) p++;
  }

  if (queue.length === p) return "YES";
  else return "NO";
}

console.log(solution1("CBA", "CBDAGE"));
console.log(solution1("CBA", "CDABGE"));
