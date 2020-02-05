/*
* access & iteration
* ./src/access.js
*  - use passed data object
*  - test access and loop options for plain object...
*/

const spireIterable = require('./iterable');

// simple log of passed Object node
function getProp(node) {
  // get requested node value
  const prop = node;
  // test log of passed object - node value
  console.log('prop value = ', prop);

  // return requested node value
  return prop;
}

// Object.keys() - return array of keys
function getKeys(obj) {
  // get keys for passed obj
  const keys = Object.keys(obj);
  // test log of passed object - keys in array
  console.log('object keys = ', keys);

  // return requested object keys in array
  return keys;
}

// Object.keys().map() - return array of keys & pass to map()
function getKeysMap(obj) {
  // get keys for map usage
  const keys = getKeys(obj);
  // map keys for passed obj
  const keysMap = keys.map(key => {
    console.log('map value = ', obj[key]);
  });

  // return requested object keys
  return keysMap;
}

// Object.values() - return array of object values
function getValues(obj) {
  // get values for passed obj
  const values = Object.values(obj);
  // log values
  console.log('object values', values);

  // return requested values in array
  return values;
}

// Object.entries() - return keys and values
function getEntries(obj) {
  // get keys and values for passed obj
  const entries = Object.entries(obj);
  // log return values
  console.log('object entries = ', entries);

  // return entry values (key, value) in array
  return entries;
}

// Object.entries().forEach - iterate over return array of inner key/value pairs
function getForEntries(obj) {
  // get keys and values for passed obj
  const entries = getEntries(obj);
  console.log(entries);
  // loop through entries for passed obj
  const forEntries = entries.forEach( ([key, value]) => {
        console.log('forEntries key = ', key);
        console.log('forEntries value = ', value);
  });

  // return requested object keys
  return forEntries;
}

module.exports = {
  getProp,
  getKeys,
  getKeysMap,
  getValues,
  getEntries,
  getForEntries
}
