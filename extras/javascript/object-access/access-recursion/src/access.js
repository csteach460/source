/*
* access & recursion
* ./src/access.js
*  - use passed data object
*  - test access and recursion options for plain object...
*/

const spireIterable = require('./iterable');

// Object.entries() - return keys and values
function getEntries(obj) {
  // get keys and values for passed obj
  const entries = Object.entries(obj);
  // log return values
//  console.log('object entries = ', entries);

  // return entry values (key, value) in array
  return entries;
}

function updateStore(recurseArr) {
  console.log('initial store array = ', recurseArr);
}

// Object.entries().forEach - iterate over return array of inner key/value pairs
function getRecurseEntries(obj) {

  const store = [];

  function recurse(obj) {
    // get keys and values for passed obj
    const entries = getEntries(obj);
    // loop through entries for passed obj
    entries.forEach( ([key, value]) => {
        if (value.constructor === Object) {
          spireIterable.iterable(value);
           //console.log('key = ', key);
           //console.log('value = ', value);
          store.push(value);
          recurse(value);
        } else {
          return;
        }
    });

    return store;
  }

  const recurseStore = recurse(obj);
  const orderedStore = updateStore(recurseStore);

  // return requested object keys
  return orderedStore;
}

module.exports = {
  getRecurseEntries
}
