"""
1. max를 구하고
2. 전체 합에서 max를 뺀 값이 max보다 크면 Yes, 아니면 No
"""

def solution(a, b, c):
  total = a + b + c
  max = a

  if b > a:
    max = b
  
  if c > max:
    max = c

  if total - max > max:
    return "YES"
  else:
    return "NO"

print(solution(13, 29, 17))