/*
* algorithms & data structures
*  - check for a gold sweet
*  - use `while` loop  
*/

// FN: search passed jar of sweets
function searchSweets(main_jar) {
    // declare second_jar for removed sweets...
    const second_jar = [];
    // loop through jar - check main jar has sweets left...
    while (main_jar.length > 0) {
        // get a sweet and remove from main_jar - or use shift() for first item...
        const sweet = main_jar.pop();
        // check sweet colour - gold wins prize...
        if (sweet !== 'gold') {
          console.log(`${sweet} sweet is not gold...`);
          // if not gold, add to second jar
          second_jar.push(sweet);
        } else {
          // you win...gold sweet found in main jar
          console.log(`you win, ${sweet} sweet found!`);
          // exit loop...
          return;
        }
    }
}

// define main jar with variety of sweets
const main_jar = ['blue', 'green', 'red', 'orange', 'gold', 'yellow', 'pink'];
// check main jar for a gold sweet...
searchSweets(main_jar);