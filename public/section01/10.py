"""
"""

def solution(word: str, char: str) -> int:
  cnt = 0
  for letter in word:
    if letter == char:
      cnt += 1
  return cnt

print(solution("COMPUTERPROGRAMMING", "R"))