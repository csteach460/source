/*
* array-sort3.js
* sort method and options for various datatypes
*/

// example array values...
const library = [
  {
    title: 'The Glass Bead Game',
    author: 'Hermann Hesse',
    read: false,
    copies: 5
  },
  {
    title: 'The Path to Rome',
    author: 'Hilaire Belloc',
    read: false,
    copies: 7
  },
  {
    title: 'Hannibal\'s Footsteps',
    author: 'Bernard Levin',
    read: false,
    copies: 3
  },
  {
    title: 'A Year in Provence',
    author: 'Peter Mayle',
    read: true,
    copies: 12
  }
];

const sortBooks = function(library) {
  // call array prototyp method sort()
  library.sort(function(a, b) {
    console.log(`${a.title} and ${b.title}`);

    // sorts by numerical value - descending order
    // if (a.copies > b.copies) {
    //   return -1;
    // } else if (b.copies > a.copies) {
    //   return 1;
    // } else {
    //   return 0;
    // }

    // sorts by numerical value - ascending order
    if (b.copies > a.copies) {
      return -1;
    } else if (a.copies > b.copies) {
      return 1;
    } else {
      return 0;
    }

  })
}

sortBooks(library);
console.log(library);
