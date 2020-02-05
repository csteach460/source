/*
* iterable2.js
* iterator and iterable object example - infinite sequence of items...no `done` property defined
* n.b. casting iterable object into an array with `Array.from` or spread operator will cause JS to crash
* to get values safely
* - destructure to pull values in specific position of the sequence
* - for...of to get dynamic values with ranges &c.
*/

// infinite sequence of values with iterable object - no defined `done` property
const random = {
  [Symbol.iterator]: () => ({
    next: () => ({ value: Math.random() })
  })
}

// destructure - get specific values from random infinite sequence
const [one, another] = random;
// log specific value
//console.log(another);

// for...of - loop over infinite sequence with define break point to avoid infinite loop from iterable object
for (const value of random) {
  if (value > 0.7) {
    console.log(`break called for random iterable object`);
    break;
  }
  console.log(value);
}
