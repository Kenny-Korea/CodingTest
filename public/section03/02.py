"""
유효한 팰린드롬
"""

def solution(text: str):
  s = ""
  reversed_s = ""
  for char in text:
    if char.isalpha():
      s += char.lower()
  
  for i in range(len(s)):
    reversed_s += s[len(s) - 1 - i]

  print(s)
  print(reversed_s)
  return 0

print(solution("found7, time: study; Yduts; emit, 7Dnuof"))