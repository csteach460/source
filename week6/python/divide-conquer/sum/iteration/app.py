# app.py
# - divide and conquer
# - sum with iteration

def sum(data):
    total = 0
    for x in data:
        total += x
    return total

print(sum([6, 9, 13, 5, 11, 16]))