/*
* basic-stack1.js
* - Stack data structure
* - constructor to instantiate a stack object
* - prototype methods
*/

// CONSTRUCTOR = Stack object
function Stack() {
    /* define instance properties for stack
    * - empty array for instantiated stack
    * - options might include max length, restricted data type &c.
    */ 
    this.store = [];
}

/*
* METHODS
*  varous methods to work wotj Stack object
*/

// PROTOTYPE - add method for value pushed to top of stack
Stack.prototype.add = function (value) {
    this.store.push(value);
    console.log(`value added = ${value}`);
}

Stack.prototype.delete = function () {
    const deletedValue = this.store.pop();
    console.log(`last value deleted = ${deletedValue}`);
}

Stack.prototype.size = function () {
    const size = this.store.length;
    console.log(`store size = ${size}`);
}

Stack.prototype.peek = function () {
    const peekValue = this.store[(this.store.length-1)]
    console.log(`top value = ${peekValue}`);
}

Stack.prototype.clear = function () {
    // resets Stack's array store - clears all items
    this.store = [];
}

Stack.prototype.empty = function () {
    if (this.store.length === 0) {
        return true;
    } else {
        return false;
    }
}

const newStack = new Stack();

newStack.add('spire &amp; the signpost');
newStack.add('aim for the stars')
//const anotherStack = newStack;
newStack.size();
newStack.peek();
newStack.delete();
console.log(`is Stack empty? ${newStack.empty()}`);
newStack.size();
// unrestricted output of Stack object - privacy needs to be considered...
console.log(newStack);
//anotherStack.add('snow white');
//console.log('anotherStack = ', anotherStack);
newStack.clear();
console.log(newStack);
// console.log(anotherStack);
console.log(`is Stack empty? ${newStack.empty()}`);