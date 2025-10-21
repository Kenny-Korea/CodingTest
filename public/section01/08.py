"""
전체 합 - 100 = 어떤 두 수의 합
그 두 수를 찾고, 그 두수를 제외한 나머지 수를 출력한다
"""

def solution(arr: list):
  sum = 0
  for num in arr:
    sum += num
  target = sum - 100
  
  found = False
  result = []

  for i in range(len(arr)):
    if found:
      break
    for j in range(i + 1, len(arr)):
      if arr[i] + arr[j] == target:
        for k in range(len(arr)):
          if k != i and k != j:
            result.append(arr[k])
        found = True
        break
    
  return result

print(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]))