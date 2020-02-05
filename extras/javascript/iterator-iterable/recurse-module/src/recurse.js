/*
* recurse.js
* - use recursive algorithm with iterable plain object
* - return array with nested objects and custom iterators
*/

/******
* REQUIRE
* - test modules for object iterables and recursion...
*/
const spireIterable = require('./iterable');

/******
* FN: return array with separate iterable for each nested object
* - test recursion for object
* - add Symbol.iterator to each nested child object...
*/
function objRecursive(obj) {
  let store = [];

  function recurse(obj) {
    const objKeys = Object.keys(obj);
    store.push(obj);

    for (val of obj) {
      if (val.constructor === Object) {
        const obj = spireIterable.iterable(val);
        recurse(obj);
      }
    }
    return store;
  }

  return recurse(obj);
}

// define API for module
module.exports = {
  recurse: objRecursive
}
