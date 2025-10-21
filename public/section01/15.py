"""
"""

def solution(word: str):
  length = len(word) # 4
  middle = length // 2 # 2

  if length % 2 == 0:
    return word[middle - 1] + word[middle]
  else:
    return word[middle]

print(solution("study"))