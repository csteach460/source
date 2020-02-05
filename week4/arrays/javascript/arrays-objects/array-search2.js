/*
* array-search2.js
* test find() to search array and objects
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

const findBook = function (library, bookTitle) {
  return library.find(function(book, index) {
    return book.title.toLowerCase() === bookTitle.toLowerCase();
  });
}

const book = findBook(library, 'The Glass Bead Game');
console.log(book);
