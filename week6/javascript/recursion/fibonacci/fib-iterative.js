/*
* fib-iterative.js
* - iterative solution to Fibonacci series
* - function returns requested n-th entry in series
* - e.g. [0, 1, 1, 2, 3, 5, 8, 13]
* - initial array should start with [0,1]
* - then iteratively add numbers for sequence...
*/

function fib(n) {
  const result = [0, 1]; // trick is to pre-populate array

  // i starts at index 2...
  for (let i = 2; i <= n; i++) {
    // get the previous two results in array
    const a = result[i-1];
    const b = result[i-2];
    // calculate next value in series & push to result array
    result.push(a + b);
  }
  // get result at specified index posn in series...
  return result[n-1]; // -1 due to array index starting at 0...
}

console.log('posn 8 in fibonacci series = ', fib(8));
