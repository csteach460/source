/*
* app.js
* main file for iterative recursion module
*/

/******
* DATA
* test object with nested child objects
*/

const archive = {
  archive: {
    collection1: {
      author: 'Mayle, P',
      book1: 'a good year',
      book2: 'a year in provence',
      book3: 'hotel pastis',
    },
    collection2: {
      author: 'Hesse, H',
      book1: 'the glass bead game',
      book1details: {
        date: 1949,
        isbn: 9780553200232,
        type: 'translation',
        lang: {
          orig: 'de',
          eds: {
            en: 'en-gb, en-us',
            others: 'fr, es, de'
          }
        }
      },
    },
    collection3: {
      author: 'Levin, B',
      book1: 'hannibal\'s footsteps'
    }
  },
  details: {
    location: 'mariafels',
    director: 'knoefels',
    access: 'restricted'
  }
};

/******
* REQUIRE
* - test modules for object iterables and recursion...
*/
const spireIterable = require('./src/iterable');
const spireRecurse = require('./src/recurse');

// create iterable for plain object
const objIterable = spireIterable.iterable(archive);

/*
* recursion
* - pass iterable plain object
* - return array with iterable nested objects
* - each nested object now includes its own iterator...
*/
const objRecurse = spireRecurse.recurse(objIterable);

// test return for modules
console.log(objRecurse);
