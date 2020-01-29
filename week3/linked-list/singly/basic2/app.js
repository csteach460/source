/*
* algorithms & data structures
* - singly linked list - basic 2
*   - instantiate list
*   - add node to list
*   - get node from list
*   - custom iterator for list object
*/

const head = Symbol("head");

class LinkedNode {
    // instantiate with default props for linked list node 
    constructor(data) {
      this.data = data;
      this.next = null;
    }
}

class LinkedList {
    constructor() {
      // set initial pointer to first node in list
      this[head] = null;
    }

    addNode(data) {
        // create new node
        const newNode = new LinkedNode(data);
        // handle empty list - no items
        if (this[head] === null) {
          // head set to new node
          this[head] = newNode;
        } else {
          // look at first node
          let current = this[head];
          // follow pointers to the end...
          while (current.next !== null) {
            // update current
            current = current.next;
          }
          // update node for next pointer
          current.next = newNode;
        }
    }

    // traverse list to defined index posn
    getNode(index) {
        // check index value is positive
        if (index > -1) {
            // initial pointer for traversal
            let current = this[head];
            // record location in list...
            let i = 0;
            // traverse list - until either index or end
            while ((current !== null) && (i < index)) {
                // update current
                current = current.next;
                // increment location
                i++;
            }
            // return data - i.e. current != null
            return current !== null ? current.data : undefined; 
        }
        else {
            return undefined;
        }
    }

    /*
    * custom iterable
    *   - generator method with custom iterator
    *   - default iterator for class
    */
    *[Symbol.iterator]() {
      // define start of iterator
      let current = this[head];
      // whilst nodes in linked list - until tail
      while (current !== null) {
        // yield each node's data
        yield current.data;
        // update current to next node
        current = current.next;
      }
    }

}

// instantiate a new linked list
const list = new LinkedList();

// add some initial nodes to the linked list
list.addNode('castalia');
list.addNode('waldzell');
list.addNode('mariafels');

// get a specified node, and log to the console...
console.log(list.getNode(1));

// log all nodes in current list
for (const node of list) {
    console.log(node);
}

// spread the list object
console.log(...list);
