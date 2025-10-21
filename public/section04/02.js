/**
 *
 */

function solution(arr = [1]) {
  let answer = [];
  for (let num of arr) {
    let s = num.toString();
    // let reversed = '';
    let reversed = s.split('').reverse().join('');

    // for (let i = 0; i < s.length; i++) {
    //   reversed += s[s.length - i - 1];
    // }

    let intNum = parseInt(reversed);
    if (intNum === 1) continue;

    let isPrime = true;
    for (let i = 2; i < Math.floor(intNum / 2); i++) {
      if (Math.floor(intNum % i) === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      answer.push(intNum);
    }
  }

  return answer;
}

console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));
