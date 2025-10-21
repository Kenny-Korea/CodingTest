/**
 * 동전 교환
 */

function solution1(arr = [1, 2, 5], t = 15) {
  let answer = Number.MAX_SAFE_INTEGER;
  let cnt = 0;

  function DFS(l = 0, sum = 0) {
    if (sum > t) return;
    /**
     * 현재 최소값보다 더 큰 애들은 굳이 볼 필요 없으므로 최적화를 위해 걸러줘야 함
     *
     * 아래 코드 없을 때 연산 횟수: 1843회
     * 아래 코드 있을 때 연산 횟수: 10회
     */
    if (l >= answer) return;
    if (sum === t) {
      answer = Math.min(answer, l);
      cnt++;
    } else {
      for (let x of arr) {
        DFS(l + 1, sum + x);
      }
    }
  }

  DFS(0, 0);
  console.log("cnt :", cnt);
  return answer;
}

console.log(solution1([1, 2, 5], 15));
