/*
* iterable-playlist1.js
* iterator and iterable object example - add iterator to standard object
* music playlist manager example
*/

// songs for playlist
const songs = [
  'Romeo & Juliet - Nino Rota',
  'O Sole Mio - Eduardo di Capua',
  'String Sonata - Gioachino Rossini',
  'La Danza - Gioachino Rossini',
  'Adriana Lecouvreur Intermezzo - Francesco Cilea',
  'Cinema Paradiso - Ennio Morricone',
  'Core \'ngrato - Salvatore Cardillo',
  'Arrivederci Roma - Renato Rascel'
];

// define structure and output of playlist - songs and no. of repeats
function playlist(songs, repeat) {
  // return iterator object for passed params
  return {
    [Symbol.iterator]() {
      // initial index set to 0 - index for songs...
      let index = 0;
      return {
        // return expected next() method for iterator...
        next() {
          // check index value for songs in passed array
          if (index >= songs.length) {
            // decrement repeat as index of songs exceeds no.of songs
            repeat--;
            // reset index to move to next repeat...
            index = 0;
          }
          // check no. of repeat iterations completed - less than 1 = end of playlist repear
          if (repeat < 1) {
            // return expected done for iterate & end of iterator from next() method...
            return { done: true };
          }
          // define each song from passed array
          const song = songs[index];
          // increment song index to iterate through songs array...
          index++;
          // whilst songs still availabel for iterator - return song value and done boolean set to false...
          return {
            done: false,
            value: song
          }
        }
      }
    }
  }
}

// test output for iterable object
console.log([...playlist(songs, 3)]);
