/*
* fib-recursive-memoise.js
* - recursive solution to Fibonacci series
* - function returns requested n-th entry in series
* - e.g. [0, 1, 1, 2, 3, 5, 8, 13]
* - initial array should start with [0,1]
* - then recursively add numbers for sequence...
* - faster version with memoisation
*/

/*
* FN: Memoise - generic memoisation function...
*/
// pass original function - e.g. slow recursive fibonacci function
function memoise(fn) {
  // temporary store
  const cache = {};
  // return anonymous function - use spread operator to allow variant no. args
  return function(...args) {
    // check passed args in cache - if true, return cached args...
    if (cache[args]) {
      return cache[args];
    }
    // no cached args - call passed fn with args
    const result = fn.apply(this, args);
    // add result for args to the cache
    cache[args] = result;
    // return the result...
    return result;
  };
}

function fib(n) {
  // base case
  if (n < 2) {
    console.log(n);
    return n;
  }
  // dynamic calculation of number in sequence
  return fib(n-1) + fib(n-2);

}

// reassign memoised fib fn to fib - recursion then calls memoised fib fn...
fib = memoise(fib);

console.log('index posn 2000 in fibonacci series = ', fib(2000));
//console.log('actual posn 5 in fibonacci series = ', fib(5-1));
