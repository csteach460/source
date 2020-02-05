/*
* iterable1.js
* iterator and iterable object example - `Symbol.iterator`
*/

// array of items
const items = ['the glass bead game', 'hannibal\'s footsteps', 'enthusiasms', 'a year in provence'];

// object with iterator
const sequence = {
  // `Symbol.iterable` property - returns an iterable object
  [Symbol.iterator]() {
    // index counter
    let i = 0;
    return {
      // required next method for iterator
      next() {
        // value for current iteration index position
        const value = items[i];
        // increment counter
        i++;
        // define end of iterator
        const done = i > items.length;
        // return value and boolean for done...
        return { value, done };
      }
    }
  }
}

// add each item in iterator object to array using spread operator...
let spreadArray = [...sequence];
// log array
console.log(spreadArray);
// log value for specified index
console.log(spreadArray[1]);

// // output using for...of loop
for (const item of sequence) {
  console.log(`item = ${item}`);
}
