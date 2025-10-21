"""
"""

def solution(arr):

  min = arr[0]

  for num in arr:
    if num < min:
      min = num


  return min

print(solution([5, 3, 7, 11, 2, 15, 17]))