/*
* access & iteration - app.js
* object access options
*   - basic options for looping through plain objects
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
  // loop through object entries - forEach
  const recurseTest = objectAccess.getRecurseEntries(val['planets']);
  //console.log(...recurseTest);

});
