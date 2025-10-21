"""
** 자릿수의 합 구하는 방법

나머지를 누적하고
몫이 0이 될 때 break 한다
"""


def solution(arr: list[int]):

  # pythonic한 풀이

  maxnum = 0
  q = []

  for num in arr:
    acc = 0
    for k in str(num):
      acc += int(k)

    if acc >= maxnum:
      maxnum = acc
      q.append(num)

  return max(q)




print(solution([460,603,40,521,128,123,137]))