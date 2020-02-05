/*
* reduce1.js
* reduce = build a value by repeatedly using a single array element and combine with previous value...
* combine and total copies for a single author...e.g. Hermann Hesse
*/

// sample array
const library = [
  {
    title: 'The Glass Bead Game',
    author: 'Hermann Hesse',
    read: true,
    copies: 15
  },
  {
    title: 'Demian',
    author: 'Hermann Hesse',
    read: false,
    copies: 5
  },
  {
    title: 'Steppenwolf',
    author: 'Hermann Hesse',
    read: false,
    copies: 8
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
    read: true,
    copies: 3
  },
  {
    title: 'A Year in Provence',
    author: 'Peter Mayle',
    read: true,
    copies: 12
  }
];

/* REDUCE: custom function for datasets
* parameters expected - array, combining function, start value
*/

function reduce(array, combine, start) {
  let current = start;
  for (let elem of array) {
    current = combine(current, elem);
  }
  return current;
}

// filter array to get required objects for reduce
// test mapping with custom function and array
let hesseBooks = library.filter(book => book.author.toLowerCase() === 'hermann hesse');
// `a` initially set to `current` - then values from array added for b.copies...combined computed value reduced
console.log(reduce(hesseBooks, (a, b) => a+b.copies, 0));
