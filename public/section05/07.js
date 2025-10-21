/**
 * 아나그램
 */

function getAnagram(s = "") {
  const map = new Map();
  for (let char of s) {
    if (map.has(char)) map.set(char, map.get(char) + 1);
    else map.set(char, 1);
  }
  return map;
}

function solution1(a = "", b = "") {
  //
  let mapA = getAnagram(a);
  let mapB = getAnagram(b); // 굳이 B를 map으로 만들 필요가 없음

  if (mapA.size !== mapB.size) return "FALSE";

  for (let [k, v] of mapA) {
    if (!mapB.has(k) || mapB.get(k) !== v) return "FALSE";
  }

  return "TRUE";
}

console.log(solution1("AbaAeCe", "baeeACA"));
console.log(solution1("abaCC", "Caaab"));
