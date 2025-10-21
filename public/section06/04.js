/**
 * 후위식 연산(postfix)
 */

function solution1(s = "352+*9-") {
  let stack = [];
  for (let char of s) {
    // 숫자면 push
    if (!isNaN(parseInt(char))) stack.push(char);
    // 연산자면 stack의 두 값을 꺼내와서 연산 후, 결과값을 stack에 push
    else {
      let b = parseInt(stack.pop());
      let a = parseInt(stack.pop());

      let res = 0;

      switch (char) {
        case "+":
          res = a + b;
          break;
        case "-":
          res = a - b;
          break;
        case "*":
          res = a * b;
          break;
        case "/":
          res = a / b;
          break;
      }

      stack.push(res);
    }
  }

  return stack[0];
}

console.log(solution1("352+*9-"));
