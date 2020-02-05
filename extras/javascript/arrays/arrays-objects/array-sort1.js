/*
* array-sort1.js
* sort method and options for various datatypes - e.g. strings
*/

// example array values...
const library = [
  {
    title: 'The Glass Bead Game',
    author: 'Hermann Hesse'
  },
  {
    title: 'Hannibal\'s Footsteps',
    author: 'Bernard Levin'
  },
  {
    title: 'A Year in Provence',
    author: 'Peter Mayle'
  }
];

const sortBooks = function(library) {
  // call array prototyp method sort()
  library.sort(function(a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      // false value
      return -1;
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      // true value...
      return 1;
    } else {
      // same value already exists
      return 0;
    }
  })
}

sortBooks(library);
console.log(library);
