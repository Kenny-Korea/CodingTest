/**
 * 조합 구하기
 */

function solution1(n = 4, m = 2) {
  let answer = 0;
  let ch = Array.from({ length: n + 1 }, () => 0); // [0, 1, 0, 0, 0]
  let mat = Array.from({ length: n + 1 }, () =>
    Array.from({ length: n + 1 }, () => 0)
  );
  console.log(mat);
  let tmp = []; // [1]

  function DFS(l = 0) {
    if (l === m) {
      if (ch[tmp[0]][tmp[1]] !== 1 && ch[tmp[1]][tmp[0]] !== 1) {
        console.log(tmp);
        ch[tmp[1]][tmp[0]] = 1;
        ch[tmp[0]][tmp[1]] = 1;
        answer++;
      }
    } else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp.push(i);
          DFS(l + 1);
          tmp.pop();
          ch[i] = 0;
        }
      }
    }
  }

  DFS(0);

  return answer;
}

// console.log(solution1(4, 2));

function solution2(n = 4, m = 2) {
  let answer = 0;
  let tmp = [];

  function DFS(l = 0, s = 0) {
    if (l === m) {
      console.log(tmp);
      answer++;
    } else {
      for (let i = s; i <= n; i++) {
        tmp.push(i);
        DFS(l + 1, i + 1);
        tmp.pop();
      }
    }
  }

  DFS(0, 1);

  return answer;
}
console.log(solution2(4, 2));
