/*
* app.js
* - divide and conquer
* - sum with recursion
* - destructure array with spread operator...
*/

function sum(data) {
    if (data.length === 1) {
        return data[0];
    } else {
        // destructure data - get head and return rest
        const [head, ...rest] = data;
        return head + sum(rest);
    }
}

console.log(`sum of values = ${sum([6, 9, 13, 5, 11, 16])}`);