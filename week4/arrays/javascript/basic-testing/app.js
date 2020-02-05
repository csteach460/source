/**
  js-plain - collections - arrays
    - basic map example
**/

// array
const archives = [
  {name: 'waldzell', type: 'game', location: 'castalia'},
  {name: 'mariafels', type: 'benedictine'}
];

// check archives - `every` returns true for all match, `false` for a single error/omission 
const everyName = archives.every(archive => 'name' in archive);

// check boolean return for `every` method in everyName
everyName === true ? console.log(`each archive has a name`) : console.log(`at least one archive is unnamed...`);

// check archives - `some` return true for a single match, `false` for no matches
const singleLocation = archives.some(archive => 'location' in archive);

// check boolean return value
singleLocation === true ? console.log(`at least one archive has a location`) : console.log(`no archive has a location...`);