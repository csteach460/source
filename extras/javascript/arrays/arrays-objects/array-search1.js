/*
* array-search1.js
* test findIndex() to search object
*/

const notes = [
  {title: 'note 1', note: 'a new note for testing...'},
  {title: 'note 2', note: 'a second new note for testing...'},
  {title: 'note 3', note: 'a third new note for testing...'}
]
const noteIndex = notes.findIndex(function(note, index) {
  console.log(note.title);
  return note.title === 'note 2';
});
console.log(noteIndex);
