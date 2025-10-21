"""
1. 뒤집기
2. 소수 확인하기
"""

def solution(arr: list[int]) -> list[int]:
  q = []
  answer = []

  for num in arr:
    temp = num
    new = 0
    while True:
      q = temp // 10
      r = temp % 10
      new += r * 10

  return answer

print(solution())