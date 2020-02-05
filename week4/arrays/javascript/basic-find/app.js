/**
  js-plain - collections - arrays
    - basic search and find
**/

// array
const archives = [
  {name: 'waldzell', types: 'game', location: 'castalia'},
  {name: 'monteport', types: 'music', location: 'castalia'},
  {name: 'mariafels', location: 'czech'}
];

// find object in array - always returns the first match if multiple matches in array
const findLocation = archives.find(archive => {
  // return object - not found simply returns undefined
  return archive.location === 'castalia';
});

// check search - check undefined or log archive name to console
findLocation !== undefined ? console.log(`archive in castalia = ${findLocation.name}`) : console.log(`location and archive not found...`);

// filter array and return multiple matches
const filterTypes = archives.filter(archive => 'type' in archive);

// check filter returns
if (filterTypes.length >= 1 ) {
  for(let archive of filterTypes) {
    console.log(`archive name = ${archive.name} and type = ${archive.type}`);
  }
} else {
  console.log(`archive types are not available...`);
}
