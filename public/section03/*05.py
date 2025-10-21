"""
문자열 압축

마지막 인덱스에 i + 1이 out of range가 되는 것을 방지하기 위해
단어 마지막에 빈 공백 " "을 붙여서 한 칸 더 길게 만들어줌
"""

def solution(text: str) -> str:
  answer = ""
  prev = ""
  cnt = 1

  # for char in text:
  #   if char == prev:
  #     cnt += 1
  #   else:
  #     answer += prev
  #     if cnt > 1:
  #       answer += str(cnt)
  #     cnt = 1
  #   prev = char
  temp = text + " "
  for i, char in enumerate(text):

    if temp[i] == temp[i + 1]:
      cnt += 1
    else:
      answer += char
      if cnt > 1:
        answer += str(cnt)
      cnt = 1

  return answer



print(solution("KKHSSSSSSSE"))