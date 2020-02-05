/*
* map2.js
* map an array using ES6 map - pass custom transform function
*/

// sample array for mapping
const library = [
  {
    title: 'The Glass Bead Game',
    author: 'Hermann Hesse',
    read: true,
    copies: 5
  },
  {
    title: 'Siddartha',
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

// test mapping with custom function and array
let toRead = library.filter(book => book.read === false);
// call map on array - arguments for current element and index...
console.log(toRead.map((book, index) => `ES6 - ${index+1} - unread book = ${book.title}`));
