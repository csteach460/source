/*
* map1.js
* map an array using a custom function - NOT ES6 map function
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

/*
* MAP: custom function for array datasets
* transform = custom function for mapping
* array = any array dataset, including dynamic, computed &c.
*/

function map(array, transform) {
  let mapItems = [];
  for (let [index, elem] of array.entries()) {
    mapItems.push(transform(elem, index));
  }
  return mapItems;
}

// test mapping with custom function and array
let toRead = library.filter(book => book.read === false);
//console.log(toRead);
// call map on array - arguments for current element and index...
console.log(map(toRead, (book, index) => `${index+1} - unread book = ${book.title}`));
