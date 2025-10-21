"""
"""

def solution(text: str):
  s = text.lower()
  reversed_s = ""

  for i in range(len(s)):
    reversed_s += s[len(s) - i - 1]

  if s == reversed_s:
    return "YES"

  return "NO"

print(solution("agodoG"))