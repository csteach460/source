/*
* algorithms & data structures
* - loop invariant
*/

/* 
* FN: find minimum of numbers in a given array
*   - params
*     - check numbers 'n'
*     - array data set 'a'
*/
function minimum(n, a) {
  // set initial min for array 'a'
  let min = a[0];
    // min equals minimum element in a[0],...,a[0]
  for (i = 1; i != n; i++) {
    // min equals minimum element in a[0],...,a[i-1]
    if (a[i] < min) {
      // update min
      min = a[i];
    }
  }
  // min equals minimum element in a[0],...,a[i-1] & i==n
  return min;
}

// test array 'a'
const a = [4, 8, 22, 13, 19, 7, 2, 49, 10];

// find min in array 'arr' for 'n' numbers
const minNum = minimum(7, a);
console.log(minNum);