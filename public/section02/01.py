"""
"""

def solution(arr: list[int]) -> list[int]:
  result = []
  prev = 0

  for num in arr:
    if num > prev:
      result.append(num)
    prev = num

  return result

print(solution([7, 3, 9, 5, 6, 12]))