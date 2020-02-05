/*
* iterable4.js
* iterator and iterable object example - add iterator to standard object
* object becomes easy to iterate for regular access...
* n.b. this is a working version & not abstracted...see iterable5.js
*/

const colours = {
  green: '0e0',
  red: 'cd0603',
  charcoal: '333',
  navy: '002147',
  cambridge: 'A3C1AD',
  [Symbol.iterator]() {
    const keys = Object.keys(colours);
    return {
      next() {
        const done = keys.length === 0;
        const key = keys.shift();
        return {
          done,
          value: [key, colours[key]]
        }
      }
    }
  }
}

// log array using spread operator
//console.log([...colours]);

// log each value using for...of

for (let value of colours) {
  console.log(`colour = ${value[0]} & hex code = ${value[1]}`);
}
