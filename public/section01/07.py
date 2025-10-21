"""
"""

def solution(date, arr):
  total = 0
  for num in arr:
    if num % 10 == date:
      total += 1


  return total

print(solution(3, [25, 23, 11, 47, 53, 17, 33]))