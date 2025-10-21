/**
 *
 */

function solution1(s = 5, e = 14) {
  let answer = 0;
  let ch = Array.from({ length: 10001 }, () => 0);
  let d = Array.from({ length: 10001 }, () => 0);
  let q = [];
  ch[s] = 1;
  q.push(s);

  while (q.length) {
    let v = q.shift();
    for (let nv of [v - 1, v + 1, v + 5]) {
      if (nv === e) return d[v] + 1;
      if (nv > 0 && nv <= 10000 && ch[nv] === 0) {
        q.push(nv);
        ch[nv] = 1;
        d[nv] = d[v] + 1;
      }
    }
  }
}

console.log(solution1(5, 14)); // 3
console.log(solution1(8, 3)); // 5
