"""
첫 번째 점수를 다른 점수들과 하나씩 비교하여 등수를 매기고
두 번째 점수를 다른 점수들과 하나씩 비교하여 등수를 매기는 작업을 반복하여
최종 등수 출력
"""

def solution(scores: list[int]) -> list[int]:
  n = len(scores)
  ranks = []

  for i in range(n):
    rank = 1

    for j in range(n):
      if scores[j] > scores[i]:
        rank += 1
      
    ranks.append(rank)


  return ranks

print(solution([87,89,92,100,76]))