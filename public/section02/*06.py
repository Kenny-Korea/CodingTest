"""
가로
세로
대각선
"""

# def solution(arr: list[list[int]]) -> int:
#   maxnum = 0
#   tot = 0
#   x = len(arr)
#   y = len(arr[0])
  
#   # 가로
#   for arrX in arr:
#     tot = sum(arrX)
#     if tot > maxnum:
#       maxnum = tot
    
#     tot = 0

#   # 세로
#   for i in range(x):
#     tot = 0
#     for j in range(y):
#       tot += arr[i][j]
    
#     if tot > maxnum:
#       maxnum = tot
    
#     tot = 0

#   # 대각선
#   for i in range(x):
#     tot += arr[i][i]
  
#   if tot > maxnum:
#     maxnum = tot
  
#   tot = 0

#   for i in range(x):
#     tot += arr[i][x - i - 1]

#   if tot > maxnum:
#     maxnum = tot
  
#   tot = 0

#   return maxnum

def solution(arr: list[list[int]]) -> int:
  answer = 0
  n = len(arr)
  sumX = 0
  sumY = 0

  for i in range(n):
    for j in range(n):
      sumX += arr[j][i]
      sumY += arr[i][j]

    answer = max(answer, sumX, sumY)
    sumX = 0
    sumY = 0

  for i in range(n):
    sumX += arr[i][n - 1 - i]
    sumY += arr[i][i]

  answer = max(answer, sumX, sumY)
  
  return answer

print(solution([[10,13,10,12,15],[12,39,30,23,11],[11,25,50,53,15],[19,27,29,37,27],[19,13,30,13,19]]))