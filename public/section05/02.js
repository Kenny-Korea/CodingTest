/**
 * 공통원소 구하기
 * 
 * A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여 오름차순으로 출력하는 프로그램을 작성하세요.
▣ 입력설명
첫 번째 줄에 집합 A의 크기 N(1<=N<=30,000)이 주어집니다.
두 번째 줄에 N개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다.
세 번째 줄에 집합 B의 크기 M(1<=M<=30,000)이 주어집니다.
네 번째 줄에 M개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다.
각 집합의 원소는 1,000,000,000이하의 자연수입니다.
▣ 출력설명
두 집합의 공통원소를 오름차순 정렬하여 출력합니다.
 * 
 */

function solution1(a = [1, 2, 3], b = [1, 2, 3]) {
  //
  const map = new Map();
  const combined = a.concat(b);
  let answer = [];

  for (let num of combined) {
    if (map.has(num)) {
      let v = map.get(num);
      map.set(num, v + 1);
    } else {
      map.set(num, 1);
    }
  }

  for (let [k, v] of map) {
    if (v > 1) {
      answer.push(k);
    }
  }

  return answer.sort((a, b) => a - b);
}

console.log(solution1([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));

/// 투 포인터를 사용하는 것이 성능 측면에서 더 좋음

function solution2(arr1 = [1, 2, 3], arr2 = [1, 2, 3]) {
  let answer = [];
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let n = arr1.length;
  let m = arr2.length;
  let p1 = (p2 = 0);

  while (p1 < n && p2 < m) {
    if (arr1[p1] < arr2[p2]) p1++;
    else if (arr1[p1] > arr2[p2]) p2++;
    else {
      answer.push(arr1[p1]);
      p1++;
      p2++;
    }
  }
  return answer;
}

console.log(solution2([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));
