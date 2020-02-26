### Readme - Fibonacci - Recursive

A brief outline of a recursive option for outputting the Fibonacci series.

##### sample log output

```bash
n = 5 and r = 0
n = 4 and r = 1
n = 3 and r = 1
n = 2 and r = 1
n = 1 and r = 1
return base = 1
n = 0 and r = 2
return base = 0
n = 1 and r = 2
return base = 1
n = 2 and r = 2
n = 1 and r = 1
return base = 1
n = 0 and r = 2
return base = 0
n = 3 and r = 2
n = 2 and r = 1
n = 1 and r = 1
return base = 1
n = 0 and r = 2
return base = 0
n = 1 and r = 2
return base = 1
index posn 5 in fibonacci series =  5
```

The recursive pattern is executed as follows,

* fibonacci series for index posn 5

```pseudocode
fib(5)
    n = 5
    return fib(5-1) + fib(5-2) // recurse
    fib(5-1)
        n = 4
        return fib(4-1) + fib(4-2) // recurse
        fib(4-1)
            n = 3
            return fib(3-1) + fib(3-2) // recurse
            fib(3-1)
                n = 2
                return fib(2-1) + fib (2-2) // recurse
                fib(2-1)
                    n = 1
                    return 1 // base returned - recurse
                fib(2-2)
                    n = 0
                    return 0 // base returned - recurse
            fib(3-2)
                n = 1
                return 1 // base returned - recurse
        fib(4-2)
            n = 2
            return fib(2-1) + fib(2-2) // recurse
            fib(2-1)
                n = 1
                return 1 // base returned 
            fib(2-2)
                n = 0
                return 0 // base returned
    fib(5-2)
        n = 3
        return fib(3-1) + fib(3-2) // recurse
        fib(3-1)
            n = 2
            return fib(2-1) + fib(2-2) // recurse
            fib(2-1)
                n = 1
                return 1 // base returned
            fib(2-2)
                n = 0
                return 0 // base returned
        fib(3-2)
            n = 1
            return 1 // base returned

return 5 // sum return values for base
```