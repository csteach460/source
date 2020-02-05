/*
* iterable-custom1.js
* iterator and iterable object example - add iterator to standard object
*
*/

/*
app outline - object containing grade details for each student
- collate each student into table detail...
*/

// sample data for object - test iterator
const courseGrades = {
  student1: {
    assign1: 'b',
    assign2: 'b+',
    assign3: 'a-'
  },
  student2: {
    assign1: 'b+',
    assign2: 'b+',
    assign3: 'a'
  },
  student3: {
    assign1: 'b-',
    assign2: 'b',
    assign3: 'b'
  }
}

// ITERATOR: define custom iterator for object...
function keyValueIterator(data) {
  data[Symbol.iterator] = function () {
    const keys = Object.keys(data);
    console.log(`keys = ${keys}`);
    return {
      next() {
        const done = data.length === 0;
        console.log(data);
        // const key = data.shift();
        // console.log(`key = ${key}`);
        // return {
        //   done,
        //   value: [key, data[key]]
        // }
      }
    }
  }
  return data;
}

const gradeIterator = keyValueIterator(courseGrades);

console.log(gradeIterator[Symbol.iterator]().next());
console.log(gradeIterator[Symbol.iterator]().next());
