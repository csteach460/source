/*
* fib-recursive.js
* - recursive solution to Fibonacci series
* - function returns requested n-th entry in series
* - e.g. [0, 1, 1, 2, 3, 5, 8, 13]
* - then recursively add numbers for sequence...
*/

function fib(n, r) {
  console.log(`n = ${n} and r = ${r}`);
  // base case
  if (n < 2) {
    console.log(`return base = ${n}`);
    return n;
  }
  // dynamic calculation of number in sequence
  return fib(n-1, 1) + fib(n-2, 2);
}

// index value to find in Fibonacci series
const n = 3;
console.log(`index posn ${n} in fibonacci series = ${fib(n, 0)}`);

