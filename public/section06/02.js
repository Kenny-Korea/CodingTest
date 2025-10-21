/**
 * 괄호 문자 제거
 */

function solution1(s = "") {
  const stack = [];
  let answer = "";

  for (let char of s) {
    if (char === "(") stack.push(char);
    else if (char === ")") stack.pop();
    // 문자인 경우
    else {
      if (stack.length === 0) answer += char;
    }
  }

  return answer;
}

console.log(solution1("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
