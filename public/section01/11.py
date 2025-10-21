"""
"""

def solution(word: str) -> int:
  cnt = 0

  for letter in word:
    if ord(letter) >= 65 and ord(letter) <= 90:
      cnt +=1

  return cnt

print(solution("KoreaTimeGood"))