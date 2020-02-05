/*
* array-sort2.js
* sort method and options for various datatypes - e.g. boolean
*/

// example array values...
const library = [
  {
    title: 'The Glass Bead Game',
    author: 'Hermann Hesse',
    read: false
  },
  {
    title: 'The Path to Rome',
    author: 'Hilaire Belloc',
    read: false
  },
  {
    title: 'Hannibal\'s Footsteps',
    author: 'Bernard Levin',
    read: false
  },
  {
    title: 'A Year in Provence',
    author: 'Peter Mayle',
    read: true
  }
];

const sortBooks = function(library) {
  // call array prototyp method sort()
  library.sort(function(a, b) {
    console.log(`${a.title} and ${b.title}`);

    if (a.read && !b.read) {
      console.log(`${a.title} and ${b.title} = ${-1}`);
      return -1;
    } else if (b.read && !a.read) {
      console.log(1);
      return 1;
    } else {
      console.log(0);
      return 0;
    }
  })

}

sortBooks(library);
console.log(library);
