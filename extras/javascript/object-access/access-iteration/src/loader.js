/*
* access & iteration
* ./src/loader.js
*  - load data from local and remote sources
*  - suports various sources
*    - JSON
*/

// require default FS module - NodeJS
const fs = require('fs');

/*
* FN: JSON loader
*  - load JSON from passed URL
*  - URL supports local and remote...
*/
async function loadJSON(url) {
  //const response = await fetch(url);

  // read local JSON...
  var localJSON = fs.readFileSync(url);
  // parse string to object to be used in app...
  var response = JSON.parse(localJSON);
  //console.log('local json = ', response);

  // if (response.status === 200) {
  //   const loadData = await response.json();
  //   return loadData;
  // } else {
  //   throw new Error(`Unable to fetch JSON data...`);
  // }

  return response;

}

/*
* FN: read a passed URL
*  - focus on loading data from URL
*  - return model data
*/
async function read(url) {
  try {
    const readData = await loadJSON(url);
    return readData;
  } catch(err) {
    console.error(err);
  }
}

/*
* FN: write data for app usage
*  - return data without direct call to read or loadJSON...
*/
async function write(url) {
  const writeData = await read(url);
  return writeData;
}

module.exports = {
  write
}
