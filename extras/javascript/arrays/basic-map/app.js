/**
  js-plain - collections - arrays
    - basic map example
**/

// array
const archives = [
  {name: 'waldzell', type: 'game'},
  {name: 'mariafels', type: 'benedictine'}
];

// map array items to new array
const archiveNames = archives.map(archive => archive.name);

// iterate through new array
archiveNames.forEach(archive => {
  console.log(`archive name = ${archive}`);
});
