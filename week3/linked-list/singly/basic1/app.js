/*
* algorithms & data structures
* - singly linked list
*   - instantiate list
*   - add node to list
*   - get node from list
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


}


/*
* check usage
* - instantiate a new linked list
* - add some new nodes with data
* - get a specified node from the new list
*/

// instantiate a new linked list
const list = new LinkedList();

// add some initial nodes to the linked list
list.addNode('castalia');
list.addNode('waldzell');
list.addNode('mariafels');

// get a specified node, and log to the console...undefined for no node
console.log(list.getNode(2));
