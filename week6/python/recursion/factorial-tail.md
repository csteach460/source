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
factor(3, 1)
    x = 3, tail = 1
    return factor(3 - 1, 3 * 1) // recurse 1
    factor(2, 3)
        x = 2, tail = 3
        return factor(2 - 1, 2 * 3) // recurse 2
        factor(1, 6)
            x = 1, tail = 6
            return 6 // pop factor(1, 6) from call stack 
        return 6 // pop factor(2, 3) from call stack
    return 6 // pop factor(3, 1) from call stack
        
print 6 // stack now clear, execution ends
```

* example 2 - 5! factorial(5)

```pseudocode
factor(5, 1)
    x = 5, tail = 1
    return factor(5 - 1, 5 * 1) // recurse 1
    factor(4, 5)
        x = 4, tail = 5
        return factor(4 - 1, 4 * 5) // recurse 2
        factor(3, 20)
            x = 3, tail = 20
            return factor(3 - 1, 3 * 20) // recurse 3
            factor(2, 60)
                x = 2, tail = 60
                return factor(2 - 1, 2 * 60) // recurse 4
                factor(1, 120)
                    x = 1, tail = 120
                    return 120 // pop factor(1, 120) from call stack
                return 120 // pop factor(2, 60) from call stack
            return 120 // pop factor(3, 20) from call stack
        return 120 // pop factor(4, 5) from call stack
    return 120 // pop factor(5, 1) from call stack
            
print 120 // stack now clear, execution ends
```