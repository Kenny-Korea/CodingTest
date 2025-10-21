/**
 * 학급 회장(해쉬)
 */

function solution(n = 0, s = '') {
  //
  const res = {};

  for (let char of s) {
    if (char in res) {
      res[char] += 1;
    } else {
      res[char] = 1;
    }
  }

  let arr = Object.values(res);
  let max = Math.max(...arr);
  console.log(max);

  return Object.keys(res).find(key => res[key] === max);
}

console.log(solution(15, 'BACBACCACCBDEDE'));

/**
 *
 */

function solution1() {
  //
}

console.log(solution1(15, 'BACBACCACCBDEDE'));
