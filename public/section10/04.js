/**
 * 동전 교환(냅색 알고리즘)
 */

// 아래 답은 그리디 알고리즘을 이용한 풀이로, 정답임
// 하지만, 동전 종류가 1, 5, 8원이고, 10원을 거슬러줘야 한다면, 그리디는 실패함
// 그리디: (8, 1, 1) -> 3개
// 최적해: (5, 5) -> 2개
//
// DFS를 이용한 풀이도 가능하나, 동전 개수와 거스름돈 총액이 크면 시간 복잡도가 너무 커짐
function solution1(arr = [1, 2, 5], p = 15) {
  let cnt = 0;
  for (let i = arr.length - 1; i > -1; i--) {
    if (p) {
      let q = Math.floor(p / arr[i]);
      p -= q * arr[i];
      cnt += q;
    }
  }
  return cnt;
}

console.log(solution1([1, 2, 5], 15)); // 3 (5, 5, 5)
console.log(solution1([1, 2, 5], 18)); // 5 (5, 5, 5, 2, 1)
console.log(solution1([1, 2, 5], 4)); // 2 (2, 2)

function solution2(m = 15, coins = [1, 2, 5]) {
  let answer = 0;
  // dy[i]: i 금액을 거슬러 줄 때의 최소 동전 개수
  let dy = Array.from({ length: m + 1 }, () => 1000);
  dy[0] = 0;

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= m; j++) {
      dy[j] = Math.min(dy[j], dy[j - coins[i]] + 1);
    }
  }

  answer = dy[m];
  return answer;
}

console.log(solution2(15, [1, 2, 5])); // 3

function solution3(arr = [1, 2, 5], p = 15) {
  let answer = 0;
  let dy = Array.from({ length: p + 1 }, () => 1000);
  dy[0] = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = arr[i]; j <= p; j++) {
      dy[j] = Math.min(dy[j], dy[j - arr[i]] + 1);
    }
  }

  answer = dy[p];
  return answer;
}

console.log(solution3([1, 2, 5], 16)); // 4 (5, 5, 5, 1)
console.log(solution3([1, 5, 8], 10)); // 2 (5, 5) - 그리디 방식을 사용하게 되면 3 (8, 1, 1)이 답이 되게 됨
