/*
* iterable3.js
* iterator and iterable object example - infinite sequence of items...no `done` property defined
* n.b. casting iterable object into an array with `Array.from` or spread operator will cause JS to crash
* to get values safely
* - extract values using an abstracted function for specified no. of values from sequence
* - log values using spread operator or `for...of`
*/

// infinite sequence of values with iterable object - no defined `done` property
const random = {
  [Symbol.iterator]: () => ({
    next: () => ({ value: Math.random() })
  })
}

// specify no. of values to extract from infinite sequence - define break from infinite sequence
function take(sequence, amount) {
  return {
    // return iterator object for `take` function
    [Symbol.iterator]() {
      // define iterator for sequence...
      const iterator = sequence[Symbol.iterator]();
      // define next() method to iterate over sequence for specified no. of values...
      return {
        // decrement no. of required values - exit iterator if amount less than 1
        next() {
          if (amount-- < 1) {
            return {done: true};
          }
          // return next value from infinite sequence...
          return iterator.next();
        }
      }
    }
  }
}

// use spread operator to cast function return from random infinite sequence
//console.log([...take(random, 3));

// use for...of to iterate over random values from infinite sequence
for (let value of take(random, 5)) {
  console.log(value);
}
