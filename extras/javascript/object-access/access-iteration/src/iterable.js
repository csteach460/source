/*
* test-objects-filter
* ./src/helpers/iterable.js
* - create plain object iterable with custom iterator
*/

/******
* FN: return iterable with iterator for plain object
*/
function objectIterable(obj) {

  // create iterable object from passed param - define function for iterator
  obj[Symbol.iterator] = function () {
    // define keys from passed object
    const keys = Object.keys(obj);

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
          value: obj[key]
        }
      }
    };
  }

  // return new iterable object for passed param object
  return obj;

}

// define API for module
module.exports = {
  iterable: objectIterable
};
