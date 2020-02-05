/*
* array-filter1.js
* filter method and options
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

// custom search - library = dataset
const findBooks = function (library, query) {
  // filter dataset - library array
  return library.filter(function(book, index) {
    // check query against title - case insensitive
    const titleMatch = book.title.toLowerCase().includes(query.toLowerCase());
    // check query against author - case insensitive
    const authorMatch = book.author.toLowerCase().includes(query.toLowerCase());
    // return either match if true boolean value...
    return titleMatch || authorMatch;
  })
}

// filter dataset - query will match either title or author...
const searchLibrary = findBooks(library, 'year');
console.log(searchLibrary);
