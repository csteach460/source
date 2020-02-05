/*
* iterable5.js
* iterator and iterable object example - add iterator to standard object
* object becomes easy to iterate for regular access...
* abstracted logic into reusable function
*/

function keyValueIterator(target) {
  // create iterable object from passed target param - define function for iterator
  target[Symbol.iterator] = function () {
    // define keys from passed object
    const keys = Object.keys(target);
    return {
      // define iterator next() method
      next() {
        // done boolean set to true with no more keys from passed object
        const done = keys.length === 0;
        // set key to first element - remove element
        const key = keys.shift();
        // return object - done boolean and value array from each item in passed object
        return {
          done,
          value: [key, target[key]]
        }
      }
    }
  }
  // return new iterable object for passed param object
  return target;
}

// call keyValueIterator - pass `colours` object & make iterable object (works for any similarly structured key/value pair object)
const colours = keyValueIterator({
  green: '0e0',
  red: 'cd0603',
  charcoal: '333',
  navy: '002147',
  cambridge: 'A3C1AD',
})

// use spread operator to check return object
console.log(...colours);

// output values &c. using for...of
for (let value of colours) {
  // log each hex code for value
  console.log(value[1]);
}
