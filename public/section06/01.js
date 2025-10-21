/**
 * 올바른 괄호
 */

function solution1(s = "") {
  //
  const stack = [];

  for (let char of s) {
    if (char === "(") stack.push(char);
    else {
      if (stack.length === 0) return "NO"; // ")" 가 스택의 맨 앞에 위치하게 되면 뒤는 볼 필요도 없이 NO 이므로
      stack.pop();
    }
  }

  if (stack.length !== 0) return "NO";
  return "YES";
}

console.log(solution1("(()(()))(()"));
console.log(solution1("(())()"));
