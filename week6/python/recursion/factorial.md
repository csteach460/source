### Readme - Factorial - Recursion

A simple function to demonstrate initial patterns for recursive calls.

##### sample log output

```bash
factor x = 3
x = 3
factor x = 2
x = 2
factor x = 1
return from (x == 1) = 1
6
```

The recursive pattern is executed as follows,

* example 1 - 3! factorial(3)

```pseudocode
factor(3)
    x = 3
    return x * factor(3-1) // recurse 1
    factor(2) 
        x = 2
        return x * factor(2-1) // recurse 2
        factor(1)
            x = 1
            return 1 // pop factor(1) from call stack
        return 2 * 1 // 1 is returned from recurse 2 
        return 2 // pop factor(2) from call stack
    return 3 * 2 // 2 is returned from recurse 1
    return 6 // pop factor(3) from call stack

print 6 // stack now clear, execution ends...
```