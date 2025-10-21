def solution(a, b, c):
    answer = 0
    if a < b:
        answer = a
    else:
        answer = b

    if c < answer:
        c = answer
    
    return answer
        
print(solution(6, 5, 11))