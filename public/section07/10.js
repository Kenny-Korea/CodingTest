/**
 * 이분검색
 */

function solution1(arr = [1, 2], target = 1) {
  arr.sort((a, b) => a - b);

  let lt = 0;
  let rt = arr.length - 1;

  while (true) {
    let mid = Math.floor((lt + rt) / 2);
    if (arr[mid] === target) {
      return mid + 1;
    } else if (arr[mid] < target) {
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
}

console.log(solution1([23, 87, 65, 12, 57, 32, 99, 81], 32));
