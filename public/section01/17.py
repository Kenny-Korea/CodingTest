"""
"""

def solution(words: list[str]) -> list[str]:
  box = set()
  result = []

  for word in words:
    if word not in box:
      box.add(word)
      result.append(word)

  return result

print(solution(["good", "time", "good", "time", "student"]))