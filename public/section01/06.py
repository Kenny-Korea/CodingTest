"""
"""

def solution(arr):

  sum = 0
  min = 1000

  for num in arr:
    if num % 2 == 1:
      sum += num
      if num < min:
        min = num

  return [sum, min]

print(solution([12, 77, 38, 41, 53, 92, 85]))