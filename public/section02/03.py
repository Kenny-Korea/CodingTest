"""
"""

def solution(resA: list[int], resB: list[int]) -> list[str]:
  result = []

  for idx, _ in enumerate(resA):
    a = resA[idx]
    b = resB[idx]
    if a == b:
      result.append("D")
    elif (a == 1 and b == 3) or (a == 2 and b == 1) or (a == 3 and b ==2):
      result.append("A")
    else: 
      result.append("B")

  return result

print(solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]))