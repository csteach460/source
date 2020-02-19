# factorial-tail.py
# - test example for recursion using factorials
# - use tail to add accumulation for recursion

def factor(x, tail):
    print("factor x =",x) 
    if x == 1:
        print("return from (x == 1) = 1")
        return tail
    else:
        print("x =",x)
        return factor(x - 1, x * tail)

# set initial tail to 1
print(factor(3, 1))