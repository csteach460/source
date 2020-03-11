/*
* basic-stack1-proxy-construct.js
* - Stack data structure
* - constructor to instantiate a stack object
* - Proxy wrapper with custom `construct` trap
* - Proxy as access point to Stack object instantiation...
*/

/*
* PROXY
*/
function proxyConstruct(constructor) {

	// check passed constructor and access privileges before returning proxy for constructor...
	
    const handler = {
        construct(constructor, args) {
            console.log('proxy constructor...');
            // const stack = Reflect.construct(constructor, args);
            return new constructor(...args);
        }
    };
    return new Proxy(constructor, handler);
}

/*
* STACK
* - custom data structure
* - LIFO
*/

// CONSTRUCTOR = Stack object
function Stack() {
    /* define instance properties for stack
    * - empty array for instantiated stack
    * - options might include max length, restricted data type &c.
    */ 
    this.store = [];
}

// proxy wrapper for Stack constructor
const proxiedStack = new proxyConstruct(Stack);
// instantiate proxied Stack & check store...
console.log(new proxiedStack().store);