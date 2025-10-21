"""
"""

def solution(arr: list[str]) -> str:
  max_length = 0
  max_word = ""

  for word in arr:
    if len(word) > max_length:
      max_length = len(word)
      max_word = word

  return max_word

print(solution(["teacher", "time", "student", "beautiful", "good"]))