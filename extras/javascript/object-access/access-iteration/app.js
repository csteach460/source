/*
* access & iteration - app.js
* object access options
*   - basic options for iterating through plain objects
*   - n.b. example objects do not have Symbol.iterator
*/

/*
* REQ: load modules
*/
// data loader - query and return JSON
const dataLoader = require('./src/loader');
// access option tests
const objectAccess = require('./src/access');

/*
* DATA: load app data
*/
// define url for json
const url = './assets/json/planets.json';
// get json data
const data = dataLoader.write(url);

/*
* DATA: data usage
*/
// use return Promise from dataLoader
data.then(val => {
  /*
  * pass return data to 'access' tests...
  */
  // prop access - single node...
  objectAccess.getProp(val['planets']['venus']);
  // object keys - root node
  objectAccess.getKeys(val);
  // object keys - child node
  objectAccess.getKeys(val['planets']);
  // object keys and map
  objectAccess.getKeysMap(val['planets']);
  // object values - child node
  objectAccess.getValues(val['planets']);
  // object entries - key and val for child node
  objectAccess.getEntries(val['planets']['mars']);
  // loop through object entries - forEach
  objectAccess.getForEntries(val['planets']);

});
