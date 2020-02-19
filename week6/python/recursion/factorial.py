# factorial.py
# - test example for recursion using factorials

def factor(x):
    print("factor x =",x) 
    if x == 1:
        print("return from (x == 1) = 1")
        return 1
    else:
        print("x =",x)
        return x * factor(x-1)

print(factor(5))