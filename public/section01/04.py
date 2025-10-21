"""
"""

def solution(num):
  sum = 0
  for i in range(num):
    sum += i + 1
  return sum

print(solution(10))