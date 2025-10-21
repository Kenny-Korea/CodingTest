/**
 * 모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)
 */

function isSameMap(mapS, mapT) {
  if (mapS.size !== mapT.size) return false;

  for (let [key, value] of mapT) {
    if (!mapS.has(key) || mapS.get(key) !== value) {
      return false;
    }
  }
  return true;
}

function solution(s = '', t = '') {
  //

  let acc = 0;
  let mapS = new Map();
  let mapT = new Map();

  for (let char of t) {
    if (mapT.has(char)) {
      let v = mapT.get(char);
      mapT.set(char, v + 1);
    } else {
      mapT.set(char, 1);
    }
  }

  for (let i = 0; i < s.length - t.length + 1; i++) {
    let chunk = s.slice(i, i + t.length);

    for (let char of chunk) {
      if (mapS.has(char)) {
        let v = mapS.get(char);
        mapS.set(char, v + 1);
      } else {
        mapS.set(char, 1);
      }
    }

    if (isSameMap(mapS, mapT)) {
      acc += 1;
    }

    mapS = new Map();
  }

  return acc;
}

// console.log(solution('bacaAacba', 'abc'));

/**
 *
 */

function solution1(s = 'bacaAacba', t = 'abc') {
  let answer = 0;
  let ms = new Map();
  let mt = new Map();

  // s
  for (let i = 0; i < t.length - 1; i++) {
    if (ms.has(s[i])) {
      ms.set(s[i], ms.get(s[i] + 1));
    } else {
      ms.set(s[i], 1);
    }
  }
  console.log(ms);

  // t
  for (let char of t) {
    if (mt.has(char)) {
      mt.set(char, mt.get(char) + 1);
    } else {
      mt.set(char, 1);
    }
  }

  for (let i = t.length - 1; i < s.length; i++) {
    if (ms.has(s[i])) ms.set(s[i], ms.get(s[i] + 1));
    else ms.set(s[i], 1);
    if (i !== t.length - 1) {
      let lt = s[i - t.length];
      ms.set(s[lt], ms.get(s[lt] - 1));
      if (ms.get(s[lt]) === 0) ms.delete(s[lt]);
    }

    if (isSameMap(ms, mt)) answer += 1;
    console.log(ms);
  }

  return answer;
}

console.log(solution1('bacaAacba', 'abc'));
