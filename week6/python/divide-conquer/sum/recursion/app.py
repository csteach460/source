# app.py
# - divide and conquer
# - sum with recursion

def sum(data):
    if len(data) == 1:
        return data[0]
    else:
        return data[0] + sum(data[1:])

print(sum([6, 9, 13, 5, 11, 16]))