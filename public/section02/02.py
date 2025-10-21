"""
max보다 항상 큰 수여야 함
"""

def solution(arr: list[int]) -> int:

  max = 0
  total = 0

  for height in arr:
    if height > max:
      max = height
      total += 1

  return total

print(solution([130, 135, 148, 140, 145, 150, 150, 153]))