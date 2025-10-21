"""
"""
def is_peak(i: int, j: int, arr: list[list[int]]) -> bool:
  rows, cols = len(arr), len(arr[0])
  dx = [0, 0, -1, 1]
  dy = [-1, 1, 0, 0]

  for k in range(4):
    ni, nj = i + dx[k], j + dy[k]
    if 0 <= ni < rows and 0 <= nj < cols:
      if arr[ni][nj] > arr[i][j]:
        return False
  
  return True

  # for idx in range(n):
  #   if (i + dx[idx]) >= 0 and (j + dy[idx]) >=0:
  #     surr = arr[i + dx[idx]][j + dy[idx]]
  #     if surr > arr[i][j]: 
  #       return False
  
  # return True




def solution(arr: list[list[int]]) -> int:
  lx = len(arr[0])
  ly = len(arr)
  answer = 0

  for i in range(ly):
    for j in range(lx):
      if is_peak(i, j, arr):
        answer += 1

  return answer

print(solution([[5, 3, 7, 2, 3], 
                     [3, 7, 1, 6, 1],
                     [7, 2, 5, 3, 4],
                     [4, 3, 6, 4, 1],
                     [8, 7, 3, 5, 2]]))



def solution_by_chatgpt(arr: list[list[int]]) -> int:
    rows, cols = len(arr), len(arr[0])
    directions = [(-1,0),(1,0),(0,-1),(0,1)]  # 상하좌우
    count = 0

    for i in range(rows):
        for j in range(cols):
            if all(
                0 <= i+dx < rows and 0 <= j+dy < cols and arr[i][j] > arr[i+dx][j+dy]
                for dx, dy in directions
                if 0 <= i+dx < rows and 0 <= j+dy < cols  # 경계 안쪽만 비교
            ):
                count += 1
    return count


print(solution_by_chatgpt([
    [5, 3, 7, 2, 3], 
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2]
]))