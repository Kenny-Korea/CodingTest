/**
 * 결혼식
 */

function solution1(
  arr = [
    [1, 2],
    [3, 4],
  ]
) {
  let timeline = [];
  let max = 0;
  let cnt = 0;

  for (let elem of arr) {
    timeline.push([elem[0], "s"]);
    timeline.push([elem[1], "e"]);
  }

  timeline.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1].charCodeAt() - b[1].charCodeAt();
    } else return a[0] - b[0];
  });

  for (let x of timeline) {
    if (x[1] === "s") {
      cnt++;
      if (cnt > max) max = cnt;
    } else cnt--;
  }

  return max;
}

console.log(
  solution1([
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
);
