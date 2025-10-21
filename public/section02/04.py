"""
"""

def solution(arr: list[int]) -> int:
  sum = 0
  score = 1

  for num in arr:
    if num == 0:
      score = 1
    else:
      sum += score
      score += 1

  return sum

print(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]))