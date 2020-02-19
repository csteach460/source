/*
* basic-stack-call.js
* - example call stack usage for variables and functions
*
*/

// main function call
function greetings(name) { 
    console.log("hello " + name + "!");
    moreGreetings(name);
    console.log("ready to leave..."); 
    goodbye();
}

function moreGreetings(name) {
    console.log("how are you, " + name + "?");
}

function goodbye() {
    console.log("take care, goodbye!")
}

greetings("Daisy");
console.log("now finished...");