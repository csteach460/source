/*
* app.js - Binary search tree
* - no Map
* - extend prototype...
*/

/*
* Constructor BST
*/
function BinarySearchTree() {
    // instantiated object - private prop - root default...
    this._root = null;
}

/*
* Prototype
* -extend with custom functions
* - methods
*/
BinarySearchTree.prototype = {
    // extend - custom functions
    add: function(value){
        // define a new node - placeholder object & props...
        let node = {
                value: value,
                left: null,
                right: null
            },
            // variable for current node - use during BST traversal...
            current;
    
        // CHECK -  no items yet in the BST
        if (this._root === null){
            // ROOT - BST empty - set root to current node -
            this._root = node;
        } else {
            // update current prop - set to root node
            current = this._root;
    
            // TRAVERSE - begin traversal of BST from current node - start at root
            while(true){
    
                // check node - if value less than current node's, go LEFT
                if (value < current.value){
                    // check node - if no node in left link
                    if (current.left === null){
                        // update current prop - set `left` to new node
                        current.left = node;
                        // EXIT - node inserted as `left` link
                        break;
                    } else {
                        // node set to existing left link...
                        current = current.left;
                    }
    
                // check node - if value greater than current node's, go RIGHT
                } else if (value > current.value){
                    // chevk node = if no node in right link
                    if (current.right === null){
                        // update current prop - set `right` to new node
                        current.right = node;
                        // EXIT - node inserted as `right` link
                        break;
                    } else {
                        // node set to existing right link...
                        current = current.right;
                    }       
    
                // if new value = current one - ignore
                } else {
                    break;
                }
            }
        }
    },
    has: function(value){
        let found = false,
            current = this._root;
    
        // check node is available for search...
        while(!found && current){
    
            // check node - if value less than current node's, go LEFT
            if (value < current.value){
                // update 'current' prop
                current = current.left;
            // check node - if value greater than current node's, go RIGHT
            } else if (value > current.value){
                // update 'current' prop
                current = current.right;
            // check node - values are equal, found node...
            } else {
                // update boolean...
                found = true;
            }
        }
        // return search status...
        return found;
    },
    delete: function(value){

        let found = false,
            parent = null,
            current = this._root,
            childCount,
            replacement,
            replacementParent;
    
        // check node - if not found & node still exists
        while(!found && current){
    
            // check value - if less than current - traverse left
            if (value < current.value){
                parent = current;
                current = current.left;
            }
            // check value - if greater than current - travers right
            else if (value > current.value){
                parent = current;
                current = current.right;
            }
            // value found...
            else {
                found = true;
            }
        }
    
        /* continue - value found...determine nature of deletion
        * - special case - value is root
        * - a leaf node
        * - a node with one child
        * - a node with two children
        */
        if (found){

            // determine no. of children - add left + right
            childCount = (current.left !== null ? 1 : 0) + 
                         (current.right !== null ? 1 : 0);

            // root node - special case
            if (current === this._root){
                // check no. of child nodes - execute matching case
                switch(childCount){

                    // no children - erase root
                    case 0:
                        this._root = null;
                        break;

                    // one child - child  is now root
                    case 1:
                        this._root = (current.right === null ? 
                                      current.left : current.right);
                        break;

                    /* root - two children 
                    * - in-order predecessor
                    * 	- check left subtree
                    *		- select right most descendant
                    *   
                    *             8
                    *            / \
                    *           6   9
                    *          / \   \
                    *         2   7   11
                    *        / \       \
                    *       1   4       12
                    *          / \       \
                    *         3   5      14
                    *                    /
                    *                   13
                    */
                    case 2: // e.g. delete root node - 8
												// check left subtree - get left of root (6)
                        replacement = this._root.left;

                        // check right-most child node - if not null
                        while (replacement.right !== null){ // (7)
                            replacementParent = replacement; // (6)
                            replacement = replacement.right; // (7)
                        }

                        // check replacement parent
                        if (replacementParent !== null){ // (6)

                            // check for left node of replace - if exists, move to right of parent
                            replacementParent.right = replacement.left; // (null)

                            // new root - update with child nodes from existing root node
                            replacement.right = this._root.right;
                            replacement.left = this._root.left;
                        } else {
                            // new root - assign existing root's child nodes
                            replacement.right = this._root.right;
                        }

                        // new root - UPDATE root value after deletion of root...
                        this._root = replacement;
                        

                    // no default - one of above cases always matched...

                }
            } 
            // child nodes
            else {
                switch (childCount){

                    // no children - delete from tree
                    case 0:// check delete value relative to parent
                        if (current.value < parent.value){
                            // value < parent - null parent's left pointer
                            parent.left = null;
                        } else {
                            // else - null parent's right pointer
                            parent.right = null;
                        }
                        break;

                    // one child - replace deleted parent node
                    case 1: // check value relative to parent
                        if (current.value < parent.value){
                            // value < parent - reset left pointer
                            parent.left = (current.left === null ? 
                                           current.right : current.left);
                        } else {
                            // value > parent - reset right pointer
                            parent.right = (current.left === null ? 
                                            current.right : current.left);
                        }
                        break;    

                    /* child node - two children 
                    * - in-order predecessor
                    * 	- check left subtree
                    *	- select right most descendant
                    */
                    case 2:
                        // two children - reset pointers for new traversal
                        replacement = current.left;
                        replacementParent = current;

                        //find the right-most node
                        while(replacement.right !== null){
                            replacementParent = replacement;
                            replacement = replacement.right;
                        }

                        replacementParent.right = replacement.left;

                        // assign - children to replacement
                        replacement.right = current.right;
                        replacement.left = current.left;

                        // add replacement to correct node in tree
                        if (current.value < parent.value){
                            // current < parent - add replacement to parent's left pointer
                            parent.left = replacement;
                        } else {
                            // current > parent - add replacement to parent's right pointer
                            parent.right = replacement;
                        }        

                    //no default

                }
            }
        }
    
    },
    size: function(){
        let length = 0;
    
        //this.traverse(function(node){
          //  length++;
        //});
        this.traverse(
            (node) => {length++}
        );
    
        return length;
    },
    traverse: function(process){
        // inner scope helper function - pass node...call recursively
        function inOrder(node){
            // check node exists
            if (node) {
                // check node - if left link exists
                if (node.left !== null){
                    // call recursively - pass current node from subtree - checks extent of subtree...
                    inOrder(node.left);
                }            
                // call the passed process method on this node
                //process.call(this, node);
               process(node);

                // traverse the right subtree
                if (node.right !== null){
                    inOrder(node.right);
                }
            }
        }

        // define start node - pass root
        inOrder(this._root);
    },
};

// TEST usage...

// instantiate BST
const bst = new BinarySearchTree();

// add some values
bst.add(8);
bst.add(6);
bst.add(9);
bst.add(2);
bst.add(7);
bst.add(11);
bst.add(1);
bst.add(4);
bst.add(12);
bst.add(3);
bst.add(5);
bst.add(14);
bst.add(13);

console.log(`initial BST = ${JSON.stringify(bst, null, 2)}`);
bst.delete(6);
console.log(`after node deletion = ${JSON.stringify(bst, null, 2)}`);
// check value exists
let search = bst.has(2);
console.log(`search = ${search}`);
// check no. of nodes
let count = bst.size();
console.log(`BST size = ${count}`);


