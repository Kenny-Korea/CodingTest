"""
"""

def solution(s: str, t: str):
  n = len(s)
  d = []
  for i in range(n):
    distance = 0
    if s[i] == t:
      d.append(distance)
    else:
      for j in range(1, n):
        dl = i - j
        dr = i + j
        nl = ""
        nr = ""

        if dl >= 0:
          nl = s[dl]
        
        if dr < n:
          nr = s[dr]

        distance += 1

        if nl == t or nr == t:
          d.append(distance)
          break

  return d

print(solution("teachermode", "e"))