/*
* app.js
* - divide and conquer
* - sum with recursion
* - slice array to return rest...
*/

function sum(data) {
    if (data.length === 1) {
        return data[0];
    } else {
        // slice - return array from index 1 to end...
        return data[0] + sum(data.slice(1));
    }
}

console.log(sum([6, 9, 13, 5, 11, 16]));