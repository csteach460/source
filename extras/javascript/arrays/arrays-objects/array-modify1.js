/*
* array-modify1.js
* delete item from array - using index
*
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

const deleteBook = function (library, bookTitle) {
  const index = library.findIndex(function(book) {
    return book.title.toLowerCase() === bookTitle.toLowerCase();
  })

  if (index > -1) {
    library.splice(index, 1);
  }
}

deleteBook(library, 'A Year in Provence');
console.log(library);
