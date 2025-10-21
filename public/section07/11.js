/**
 * 뮤직 비디오(결정 알고리즘)
 */

// 내 답: 답 자체는 맞으나, 효율적이지 못함 (이분 검색과 결정 알고리즘을 사용해야 함)
function solution1(n = 3, arr = [1, 2, 3]) {
  let sum = arr.reduce((acc, cv) => acc + cv, 0);
  let quot = Math.ceil(sum / n);

  while (true) {
    let cnt = 1;
    let acc = 0;
    for (let num of arr) {
      if (acc + num <= quot) acc += num;
      else {
        cnt++;
        acc = num;
      }
    }
    if (cnt === n) return quot;
    else quot++; // 1씩 올려나가는 것이 아니라, 이분 검색을 이용해서 최적의 답을 찾아가야 함
  }
}

console.log(solution1(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]));

//
function solution2(n = 3, arr = [1, 2, 3]) {
  //
}

console.log(solution2(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
