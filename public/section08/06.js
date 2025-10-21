/**
 * 바둑이 승차
 */

function solution1(w = 259, arr = [81, 58, 42, 33, 61]) {
  let answer = Number.MIN_SAFE_INTEGER;
  let ch = Array.from({ length: arr.length - 1 }, () => 0);

  function DFS(l = 0) {
    if (l === arr.length) {
      let acc = 0;
      for (let i = 0; i < ch.length; i++) {
        if (ch[i] === 1) acc += arr[i];
      }
      if (acc > answer && acc < w) answer = acc;
    } else {
      ch[l] = 1;
      DFS(l + 1);
      ch[l] = 0;
      DFS(l + 1);
    }
  }

  DFS(0, 0);

  return answer;
}

console.log(solution1(259, [81, 58, 42, 33, 61]));

// 가장 무거운 무게를 구하므로, 오름차순 정렬하여 앞에서부터 더하는 것은 로직이 맞지 않음 (틀린 답)
function solution2(w = 259, arr = [81, 58, 42, 33, 61]) {
  let answer = 0;
  arr.sort((a, b) => a - b);
  for (let x of arr) {
    if (answer + x < w) answer += x;
  }
  return answer;
}

console.log(solution2(259, [81, 58, 42, 33, 61]));

// 강사님 답(더 간결)
function solution3(w = 259, arr = [81, 58, 42, 33, 61]) {
  let answer = Number.MIN_SAFE_INTEGER;

  function DFS(l = 0, sum = 0) {
    if (sum > w) return;
    if (l === arr.length) {
      answer = Math.max(answer, sum);
    } else {
      DFS(l + 1, sum + arr[l]);
      DFS(l + 1, sum);
    }
  }

  DFS(0, 0);

  return answer;
}

console.log(solution3(259, [81, 58, 42, 33, 61]));
