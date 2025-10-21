"""
"""

def solution(word: str) -> str:
  box = set()
  result = ""
  
  for letter in word:
    if letter not in box:
      result += letter
      box.add(letter)


  return result

print(solution("ksekkset"))